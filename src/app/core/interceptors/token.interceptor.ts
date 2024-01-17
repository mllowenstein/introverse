import { Injector, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
// import { AuthService } from '@auth/services/auth.service';
import {
  AUTH_ERROR,
  BADREQ_ERROR,
  FORBID_ERROR,
  GEN_ERROR,
  NORES_ERROR,
  PERMIT_ERROR,
  RATE_ERROR,
  UNKNOWN_ERROR,
  SERVER_ERROR,
} from '@common/constants';
import { environment } from '@env/environment';

const envclass: any = {
  local: 'local',
  prod: 'prod',
};

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  router: Router;

  /** Since the ErrorHandler is loaded prior to
   * our angular services, we load an injector
   * in the constructor to retrieve the required
   * service for handling errors. */
  constructor(private injector: Injector) {
    this.router = this.injector.get(Router);
  }

  /** HttpErrors and InvalidTokenErrors are both
   * handled by ending the current session and
   * requiring that the user reauthenticate before
   * proceeding/returning to the page. */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // TODO: Implement this interceptor...
    return next.handle(req);
  }

  private runningLocally(envclass: string): boolean {
    if (environment.class === 'prod' || envclass !== 'local') {
      return false;
    }
    return true;
  }

  private handleError(error: HttpErrorResponse) {
    let err: any;
    if (error.status === 0) {
      err = UNKNOWN_ERROR;
    } else if (error.status === 400) {
      err = BADREQ_ERROR;
    } else if (error.status === 401) {
      err = AUTH_ERROR;
    } else if (error.status === 403) {
      err = FORBID_ERROR;
    } else if (error.status === 404) {
      err = NORES_ERROR;
    } else if (error.status === 405) {
      err = PERMIT_ERROR;
    } else if (error.status === 429) {
      err = RATE_ERROR;
    } else if (error.status >= 500) {
      err = SERVER_ERROR;
    } else {
      err = GEN_ERROR;
    }
    localStorage.setItem('app-error', JSON.stringify(err));
    return throwError(error);
  }
}
