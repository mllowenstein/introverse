import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@core/index';
import { Logger } from '@core/logger';
import { AuthService, Credentials } from '@auth/services';

const log = new Logger('LoginLogger');

@UntilDestroy()
@Component({
  selector: 'remoteink-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.createForm();
  }

  login() {
    this.isLoading = true;
    const login$ = this.authService.login(this.loginForm.value);
    login$
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
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
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
