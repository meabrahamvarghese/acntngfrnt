import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { Orders } from './orders';

export const routes: Routes = [
  { path: 'orders', component: Orders },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Orders
  ]

})

export class SalesModule { }
