import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, CredentialsService } from '@auth/services';

@Component({
  selector: 'remoteink-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  APP_NAME = 'introverse';
  menuHidden = true;
  router!: Router;
  authService!: AuthService;
  credService!: CredentialsService;

  constructor() {
    this.router = inject(Router);
    this.authService = inject(AuthService);
    this.credService = inject(CredentialsService);
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credService.credentials;
    return credentials ? credentials.username : null;
  }
}
