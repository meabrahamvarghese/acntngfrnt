import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { AccountsModule } from './accounts/accounts.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    AccountsModule,
    ProductsModule,
	SalesModule,
  ]
})
export class ComponentsModule { }
