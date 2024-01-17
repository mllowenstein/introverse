import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SimService {
  router: Router;

  async simPageLoad(loading: boolean): Promise<boolean> {
    loading = true;
    setTimeout(() => {
      loading = false;
    }, 600);
    return loading;
  }

  async simCompLoad(loading: boolean): Promise<boolean> {
    loading = true;
    setTimeout(() => {
      loading = false;
    }, 400);
    return loading;
  }
}
