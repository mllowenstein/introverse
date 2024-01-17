import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { MaterialModule } from '@material/material.module';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthModule } from '@auth/auth.module';

@NgModule({
  imports: [CommonModule, TranslateModule, MaterialModule, AuthModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent, ShellComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShellModule {}
