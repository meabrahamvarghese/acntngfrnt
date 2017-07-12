import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { DashboardsModule } from './dashboards/dashboards.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardsModule,
    EcommerceModule,
  ]
})
export class PagesModule { }
