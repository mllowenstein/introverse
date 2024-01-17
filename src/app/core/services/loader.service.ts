import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loader = signal(false);

  show(): void {
    this.loader.set(true);
  }

  hide(): void {
    this.loader.set(false);
  }
}
