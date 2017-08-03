import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { ProductsList } from './products-list';
import { ProductEdit } from './product-edit';
import { ProductDetails } from './product-details';

export const routes: Routes = [
  { path: 'products', component: ProductsList },
  { path: 'products/edit', component: ProductEdit },
  { path: 'products/details', component: ProductDetails },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsList,
    ProductEdit,
    ProductDetails 
  ]

})

export class ProductsModule { }
