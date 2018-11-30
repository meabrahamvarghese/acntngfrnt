import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
am4core.useTheme(am4themes_animated);
declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var Ladda: any;
declare var Chartist: any;
declare var moment: any;
declare var Chart: any;
declare var CanvasJS: any;
declare var c3: any;


@Component({
  selector: 'cat-page',
  templateUrl: './dashboard.html',
  styleUrls: ['../../../assets/modules/dashboard/dashboard.css']
})

export class Dashboard implements OnInit {
  private chart: am4charts.XYChart;
constructor(private zone: NgZone) {}
  ngOnInit() {
var mmt=moment();
    $( function() {
    var dte=  $('#datepicker').datetimepicker({
    date:Date(),
        icons: {
          time: "fa fa-clock-o",
          date: "fa fa-calendar",
          up: "fa fa-arrow-up",
          down: "fa fa-arrow-down",
          previous: 'fa fa-arrow-left',
          next: 'fa fa-arrow-right'
        },
        inline:false,
        format:'M/Y',
      });
dte.on("dp.change", function (e) {
      var g=moment(e.date).format("MMM YYYY")
            $('.budget-date-select').html(g);
        });
      $('.budget-date-select').html(mmt.format("MMM YYYY"));  
      $("#slt-prev-mnth").on('click', function(){
    var selectedDate=$('#datepicker').data('date');
    var nxtDate=moment(selectedDate,'M/Y').add(-1, 'months').format('M/Y');
    $('#datepicker').data("DateTimePicker").date(nxtDate);
    });
    $("#slt-next-mnth").on('click', function(){
    var selectedDate=$('#datepicker').data('date');
    var nxtDate=moment(selectedDate,'M/Y').add(1, 'months').format('M/Y');
    $('#datepicker').data("DateTimePicker").date(nxtDate);
    });
      ///////////////////////////////////////////////////////////
      // tooltips
      $("[data-toggle=tooltip]").tooltip();

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
        fullWidth: !0,
        chartPadding: {
          right: 40
        },
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });
      
 $(function () {
       var colors = {
        one: '#283250',
        two: '#902C2D',
        three: '#D13F3A',
        four: '#F05440',
        five: '#F26958'
      };
      c3.generate({
        bindto: '#chart-doughnut',
        data: {
          columns: [
            ['Danger', 30],
            ['Success', 40],
            ['Success1', 50],
            ['Success2', 60],
            ['Success2', 70]
          ],
          type : 'donut'
        },
        legend: {
  show: false
},
        color: {
          pattern: [colors.one,colors.two,colors.three, colors.four, colors.five]
        },
        donut: {
          title: "Connections"
        }
      });

});


           var chart1 = new CanvasJS.Chart("chart1-doughnut",
    { width:336,
    height:200,
        exportEnabled: false,
	animationEnabled: false,
       // theme:'dark2',
        backgroundColor:'#dbccb8',
        title: {
        fontSize: 14,
		text: "Yearly Expense"
	},
      data: [
      {
      innerRadius: 25,
		showInLegend: false,
       type: "doughnut",
       dataPoints: [
       {  y: 53.37, indexLabel: "Android" },
       {  y: 35.0, indexLabel: "Apple iOS" },
       {  y: 7, indexLabel: "Blackberry" },
       {  y: 2, indexLabel: "Windows Phone" },
       {  y: 5, indexLabel: "Others" }
       ]
     }
     ]
   });

    chart1.render();   
      ///////////////////////////////////////////////////////////
      // chart 2
      var overlappingData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
          ]
        },
        overlappingOptions = {
          seriesBarDistance: 10,
          plugins: [
            Chartist.plugins.tooltip()
          ]
        },
        overlappingResponsiveOptions = [
          ["", {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function(value) {
                return value[0]
              }
            }
          }]
        ];

      new Chartist.Bar(".chart-overlapping-bar", overlappingData, overlappingOptions, overlappingResponsiveOptions);

      ///////////////////////////////////////////////////////////
      // custom scroll
      if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
        $('.custom-scroll').each(function() {
          $(this).jScrollPane({
            contentWidth: '100%',
            autoReinitialise: true,
            autoReinitialiseDelay: 100
          });
          var api = $(this).data('jsp'),
            throttleTimeout;
          $(window).bind('resize', function() {
            if (!throttleTimeout) {
              throttleTimeout = setTimeout(function() {
                api.reinitialise();
                throttleTimeout = null;
              }, 50);
            }
          });
        });
      }

    } );

  }
  ngAfterViewInit() {
  this.zone.runOutsideAngular(() => {
am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);
var chart = am4core.create("qchart-doughnut", am4charts.SlicedChart);
chart.data = [{
  "name": "Stage #1",
  "value": 600
}, {
  "name": "Stage #2",
  "value": 300
}, {
  "name": "Stage #3",
  "value": 200
}, {
  "name": "Stage #4",
  "value": 180
}, {
  "name": "Stage #5",
  "value": 50
}, {
  "name": "Stage #6",
  "value": 20
}, {
  "name": "Stage #7",
  "value": 10
}];

let series = chart.series.push(new am4charts.PyramidSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = false;
series.valueIs = "height";

    });
}
}


