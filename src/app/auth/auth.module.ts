import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/common/material/material.module';
import { AuthRouting } from './auth.routing';
import { LoginComponent, RegisterComponent, RestoreComponent } from './components';
import { AuthService, CredentialsService } from './services';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, MaterialModule, AuthRouting],
  declarations: [LoginComponent, RegisterComponent, RestoreComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [AuthService, CredentialsService]
})
export class AuthModule {}
