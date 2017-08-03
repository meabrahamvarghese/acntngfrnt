import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ProductsModule
  ]
})
export class ComponentsModule { }
