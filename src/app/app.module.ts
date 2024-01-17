import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiPrefixInterceptor, ErrorInterceptor, TokenInterceptor } from '@interceptors/index';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialModule } from '@material/material.module';
import { darkTheme, defaultTheme, ThemeModule } from '@core/themes/index';
import { ShellModule } from '@layout/shell/shell.module';
import { AuthModule } from '@auth/auth.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { ContactService, ExploreService, HomeService, HttpService, LoaderService, NavigateService, NotFoundService, ProfileService, SimService } from '@core/services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    ThemeModule.forRoot({
      themes: [defaultTheme, darkTheme],
      active: 'default',
    }),
    MaterialModule,
    AgGridModule,
    ShellModule,
    AuthModule,
    AppRouting,
  ],
  providers: [
    ContactService, ExploreService, HomeService, HttpService, LoaderService, NavigateService, NotFoundService, ProfileService, SimService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ErrorInterceptor,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
