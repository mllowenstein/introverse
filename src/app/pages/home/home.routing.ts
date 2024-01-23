import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        data: { title: 'Home' },
        component: HomeComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {}
