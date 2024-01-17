import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: 'contact',
    data: { title: 'Contact' },
    component: ContactComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contact',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRouting {}
