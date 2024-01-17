import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  router: Router;

  constructor() {
    this.router = inject(Router);
  }

  navigate(section: string): void {
    this.router.navigateByUrl(`/profile#${section}`);
  }
}
