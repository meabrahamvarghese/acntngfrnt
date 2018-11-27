import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var Ladda: any;
declare var Chartist: any;
declare var moment: any;

@Component({
  selector: 'cat-page',
  templateUrl: './dashboard.html',
  styleUrls: ['../../../assets/modules/dashboard/dashboard.css']
})

export class Dashboard implements OnInit {
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
            $('.input-group-addon').html(g);
        });
      $('.input-group-addon').html(mmt.format("MMM YYYY"));  
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
}


