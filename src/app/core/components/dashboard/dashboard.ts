import {Component, OnInit} from '@angular/core';
import { BudgetService } from '../../services/budget.service';
declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var Ladda: any;
declare var Chartist: any;
declare var moment: any;
declare var Chart: any;
declare var c3: any;


@Component({
    selector: 'cat-page',
    templateUrl: './dashboard.html',
    styleUrls: ['../../../../assets/modules/dashboard/dashboard.css']
})

export class Dashboard implements OnInit {
    budgetData: Object;
    constructor(private budget: BudgetService) {}
    ngOnInit() {
        var mmt = moment();
        $(function () {
            var dte = $('#datepicker').datetimepicker({
                date: Date(),
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down",
                    previous: 'fa fa-arrow-left',
                    next: 'fa fa-arrow-right'
                },
                inline: false,
                format: 'M/Y',
            });
            dte.on("dp.change", function (e) {
                var g = moment(e.date).format("MMM YYYY")
                $('.budget-date-select').html(g);
            });
            $('.budget-date-select').html(mmt.format("MMM YYYY"));
            $("#slt-prev-mnth").on('click', function () {
                var selectedDate = $('#datepicker').data('date');
                var nxtDate = moment(selectedDate, 'M/Y').add(-1, 'months').format('M/Y');
                $('#datepicker').data("DateTimePicker").date(nxtDate);
            });
            $("#slt-next-mnth").on('click', function () {
                var selectedDate = $('#datepicker').data('date');
                var nxtDate = moment(selectedDate, 'M/Y').add(1, 'months').format('M/Y');
                $('#datepicker').data("DateTimePicker").date(nxtDate);
            });

                var colors = {
                    one: '#283250',
                    two: '#902C2D',
                    three: '#D13F3A',
                    four: '#F05440',
                    five: '#F26958'
                };
                c3.generate({
                    bindto: '#chart-doughnut',
                    size:{
                        width:$(".chart-line").parents(".tab-content").eq(0).width() - 10,
                        height:($(".chart-line").parents(".tab-content").eq(0).height() - 10)
                    },
                    data: {
                        columns: [
                            ['Danger', 30],
                            ['Success', 40],
                            ['Success1', 50],
                            ['Success2', 60],
                            ['Success2', 70]
                        ],
                        type: 'donut'
                    },
                    legend: {
                        show: false
                    },
                    color: {
                        pattern: [colors.one, colors.two, colors.three, colors.four, colors.five]
                    },
                    donut: {
                        title: "Connections"
                    }
                });


        });
this.budget.getBudgetData().subscribe(data => {
        this.budgetData = data
        alert(JSON.stringify(this.budgetData))
        console.log(this.budgetData);
      }
    );
    }
    ngAfterViewInit() {
        $("#category_list").height(Math.max($(window).height() - 155, 520));

        var aspRatio = .67;
        ///////////////////////////////////////////////////////////
        // chart1
        new Chartist.Line(".chart-line", {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            series: [
                [5, 0, 7, 8, 12],
                [2, 1, 3.5, 7, 3],
                [1, 3, 4, 5, 6]
            ]
        }, {
                width: $(".chart-line").parents(".tab-content").eq(0).width() - 10,
                height: ($(".chart-line").parents(".tab-content").eq(0).width() - 25)*aspRatio,
                fullWidth: true,
                chartPadding: {
                    top: 40,
                    right: 40
                },
                plugins: [
                    Chartist.plugins.tooltip()
                ]
            });


    }
}