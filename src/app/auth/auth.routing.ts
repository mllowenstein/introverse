import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent, RestoreComponent } from './components';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        data: { title: 'Login' },
        component: LoginComponent,
      },
      {
        path: 'register',
        data: { title: 'Register' },
        component: RegisterComponent,
      },
      {
        path: 'restore',
        data: { title: 'Restore' },
        component: RestoreComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRouting {}
