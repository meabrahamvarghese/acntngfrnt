import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard';

export const routes: Routes = [
  { path: 'home', component: Dashboard },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Dashboard
  ]

})

export class DashboardModule { }
