import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ExperienceComponent, InterestsComponent, SkillsComponent, ResumeComponent } from './components';

const routes: Routes = [
  {
    path: 'profile',
    children: [
      {
        path: '',
        data: { title: 'Profile' },
        component: ProfileComponent,
      },
      {
        path: '#experience',
        data: { state: 'experience' },
        component: ExperienceComponent,
      },
      {
        path: '#interests',
        data: { state: 'interests' },
        component: InterestsComponent,
      },
      {
        path: '#skills',
        data: { state: 'skills' },
        component: SkillsComponent,
      },
      {
        path: '#resume',
        data: { state: 'resume' },
        component: ResumeComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRouting {}
