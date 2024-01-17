import { Injector, Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import { AuthService } from '@auth/services/auth.service';

@Injectable()
export class ErrorInterceptor implements ErrorHandler {
  /** Since the ErrorHandler is loaded prior to
   * our angular services, we load an injector
   * in the constructor to retrieve the required
   * service for handling errors. */
  constructor(private injector: Injector) {}

  /** HttpErrors and InvalidTokenErrors are both
   * handled by ending the current session and
   * requiring that the user reauthenticate before
   * proceeding/returning to the page. */
  handleError(error: Error | HttpErrorResponse) {
    // const auth = this.injector.get(AuthService);
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401 || error.status === 403 || error.status === 404 || error.status === 405) {
        localStorage.removeItem('token');
        // auth.loggedin = false;
      }
    } else {
      if (error.stack?.includes('InvalidTokenError')) {
        localStorage.removeItem('token');
        // auth.loggedin = false;
      }
    }
  }
}
