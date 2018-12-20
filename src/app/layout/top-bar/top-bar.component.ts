import {Component} from '@angular/core';
import {BudgetService} from '../../core/services/budget.service';
declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'cat-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./common/top-bar.cleanui.css']
})
export class TopBarComponent {
    budgetData: Object;
    token: '';
    constructor(private budget: BudgetService) {}
    ngOnInit() {

        this.budget.getBudgetData().subscribe(data => {
            this.budgetData = data['data']
            this.token = data['token']
        }
        );

        $("#logoutbtn").click(function () {
            $("#logout-form").submit();

        });

    }
}
