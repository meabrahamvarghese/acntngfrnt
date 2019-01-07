import {Component} from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    ngOnInit() {

        $(function () {
            $('body').on('click', function (e) {
                //did not click a popover toggle, or icon in popover toggle, or popover
                if ($(e.target).data('toggle') !== 'popover' && $(e.target).parents('[data-toggle="popover"]').length === 0
                    && $(e.target).parents('.popover.show').length === 0) {
                    (($('[data-toggle="popover"]').popover('hide').data('bs.popover') || {}).inState || {}).click = false;
                }
            });
        });
    }
}
