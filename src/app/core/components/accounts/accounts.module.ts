import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {Transactions} from './transactions';

export const routes: Routes = [
    {path: 'transactions', component: Transactions},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Transactions
    ]

})

export class AccountsModule {}
