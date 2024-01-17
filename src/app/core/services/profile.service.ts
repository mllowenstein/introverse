import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  router: Router;

  constructor(private https: HttpService) {
    this.router = inject(Router);
  }

  getSectionData(section: string): Observable<any> | void {
    const sectionUrl = `section/${section}`
    return this.https.get(sectionUrl);
  }
}
