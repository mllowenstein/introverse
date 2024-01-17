import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Shell } from '@layout/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'auth',
      loadChildren: () => import('@auth/auth.module').then((m) => m.AuthModule),
    },
    {
      path: 'home',
      loadChildren: () => import('@pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'explore',
      loadChildren: () => import('@pages/explore/explore.module').then((m) => m.ExploreModule),
    },
    {
      path: 'profile',
      loadChildren: () => import('@pages/profile/profile.module').then((m) => m.ProfileModule),
    },
    {
      path: 'contact',
      loadChildren: () => import('@pages/contact/contact.module').then((m) => m.ContactModule),
    },
    {
      path: 'not-found',
      loadChildren: () => import('@pages/not-found/not-found.module').then((m) => m.NotFoundModule),
    },
  ]),
  // Default route on app login
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRouting {}
