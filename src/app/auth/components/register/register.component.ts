import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@core/index';
import { Logger } from '@core/logger';
import { AuthService, Credentials } from '@auth/services';

const log = new Logger('RegisterLogger');

@Component({
  selector: 'remoteink-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  error: string | undefined;
  registerForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.createForm();
  }

  register() {
    this.isLoading = true;
    const login$ = this.authService.login(this.registerForm.value);
    login$
      .pipe(
        finalize(() => {
          this.registerForm.markAsPristine();
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
    this.registerForm = this.formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
