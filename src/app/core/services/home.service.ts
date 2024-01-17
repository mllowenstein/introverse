import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  router: Router;

  constructor() {
    this.router = inject(Router);
  }
}
