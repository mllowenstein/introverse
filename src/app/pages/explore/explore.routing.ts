import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore.component';

const routes: Routes = [
  {
    path: 'explore',
    data: { title: 'Explore' },
    component: ExploreComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'explore',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreRouting {}
