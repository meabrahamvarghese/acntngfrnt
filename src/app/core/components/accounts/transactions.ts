import {Component, OnInit} from '@angular/core';
declare var $: any;
declare var jQuery: any;


@Component({
    selector: 'cat-page',
    templateUrl: './transactions.html'
})

export class Transactions implements OnInit {
    ngOnInit() {
        $(function () {

            // Datatables
            $('#example1').DataTable({
                "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
                responsive: true,
                columnDefs: [
                    {responsivePriority: 1, targets: 0},
                    {responsivePriority: 2, orderable: false, targets: -1}],
                "autoWidth": false
            });

        })

    }
}

