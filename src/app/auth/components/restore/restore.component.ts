import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@core/index';
import { Logger } from '@core/logger';
import { AuthService, Credentials } from '@auth/services';

const log = new Logger('Restoreogger');

@Component({
  selector: 'remoteink-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss'],
})
export class RestoreComponent {
  error: string | undefined;
  restoreForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.createForm();
  }

  restore() {
    this.isLoading = true;
    const login$ = this.authService.login(this.restoreForm.value);
    login$
      .pipe(
        finalize(() => {
          this.restoreForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this),
      )
      .subscribe(
        (credentials: Credentials) => {
          log.debug(`${credentials.username} successfully logged in`);
          this.router.navigate([this.route.snapshot.queryParams['redirect'] || '/'], { replaceUrl: true });
        },
        (error: string | undefined) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        },
      );
  }

  private createForm() {
    this.restoreForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
}
