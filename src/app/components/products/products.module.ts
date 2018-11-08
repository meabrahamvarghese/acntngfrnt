import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { ProductsList } from './products-list';
import { ProductEdit } from './product-edit';
import { ProductDetails } from './product-details';
import { ProductCategories } from './product-categories';
import { ProductVariations } from './product-variations';
import { BrandsList } from './brands-list';
import { BrandAdd } from './brand-add';

export const routes: Routes = [
{ path: 'products', component: ProductsList },
{ path: 'products/edit', component: ProductEdit },
{ path: 'products/details', component: ProductDetails },
{ path: 'products/categories', component: ProductCategories },
{ path: 'products/variations', component: ProductVariations },
{ path: 'products/brands', component: BrandsList },
{ path: 'brand/add', component: BrandAdd },
];

@NgModule({
imports: [
CommonModule,
RouterModule.forChild(routes)
],
declarations: [
ProductsList,
ProductEdit,
ProductDetails,
ProductCategories,
ProductVariations,
BrandsList,
BrandAdd  
]

})

export class ProductsModule { }
