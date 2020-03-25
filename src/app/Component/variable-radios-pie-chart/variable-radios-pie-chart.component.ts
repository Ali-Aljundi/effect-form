import { Component, NgZone } from '@angular/core';import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-variable-radios-pie-chart',
  templateUrl: './variable-radios-pie-chart.component.html',
  styleUrls: ['./variable-radios-pie-chart.component.scss']
})
export class VariableRadiosPieChartComponent {

  private chart: am4charts.PieChart;

  constructor(private zone: NgZone) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("variable-radios-pie-chart", am4charts.PieChart);

      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.data = [
        {
          country: "Lithuania",
          value: 260
        },
        {
          country: "Czechia",
          value: 230
        },
        {
          country: "Ireland",
          value: 200
        },
        {
          country: "Germany",
          value: 165
        },
        {
          country: "Australia",
          value: 139
        },
        {
          country: "Austria",
          value: 128
        }
      ];
      
      let series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.radiusValue = "value";
      series.dataFields.category = "country";
     // series.slices.template.cornerRadius = 3;
      series.colors.step = 3;
      
     series.hiddenState.properties.endAngle = -90;

     series.labels.template.text = "{category}: {value.value}";
     series.slices.template.tooltipText = "{category}: {value.value}";
      
     // chart.legend = new am4charts.Legend();
      this.chart = chart;
      
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
