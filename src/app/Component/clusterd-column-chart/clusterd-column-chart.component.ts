import { Component, NgZone,Input } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-clusterd-column-chart',
  templateUrl: './clusterd-column-chart.component.html',
  styleUrls: ['./clusterd-column-chart.component.scss']
})
export class ClusterdColumnChartComponent {
  @Input() nowDATA:any;
  @Input() afterDATA:any;
  @Input() beforeDATA:any;
 
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("clusterd-column-chart", am4charts.XYChart);
  
      chart.colors.step = 2;
      ////
      console.log(this.nowDATA);
      console.log(this.afterDATA);
      console.log(this.beforeDATA)
      ///
      chart.legend = new am4charts.Legend()
      chart.legend.position = 'top'
      chart.legend.paddingBottom = 20
      chart.legend.labels.template.maxWidth = 95

      let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      xAxis.dataFields.category = 'category'
      xAxis.renderer.cellStartLocation = 0.1
      xAxis.renderer.cellEndLocation = 0.9
      xAxis.renderer.grid.template.location = 0;

      let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
      yAxis.min = 0;

      function createSeries(value, name,color) {
          let series = chart.series.push(new am4charts.ColumnSeries())
          series.dataFields.valueY = value
          series.dataFields.categoryX = 'category'
          series.name = name
          series.columns.template.fill=am4core.color(color)
          series.events.on("hidden", arrangeColumns);
          series.events.on("shown", arrangeColumns);

          let bullet = series.bullets.push(new am4charts.LabelBullet())
          bullet.interactionsEnabled = false
          bullet.dy = 30;
          //bullet.label.text = '{valueY}'
          bullet.label.fill = am4core.color('#ffffff')

          return series;
      }

      chart.data = [
          {
              category: 'Before',
              comments:this.beforeDATA.comments,
              share: this.beforeDATA.share,
              ahah: this.beforeDATA.ahah,
              grrr:this.beforeDATA.grrr,
              likes:this.beforeDATA.likes,
              love:this.beforeDATA.love,
              sigh:this.beforeDATA.sigh,
              wow:this.beforeDATA.wow,
          },
          {
              category: 'Now',
              comments: this.nowDATA.comments,
              share: this.nowDATA.share,
              ahah: this.nowDATA.ahah,
              grrr:this.nowDATA.grrr,
              likes:this.nowDATA.likes,
              love:this.nowDATA.love,
              sigh:this.nowDATA.sigh,
              wow:this.nowDATA.wow,
          },
          {
              category: 'After',
              comments: this.afterDATA.comments,
              share: this.afterDATA.share,
              ahah: this.afterDATA.aha,
              grrr:this.afterDATA.grrr,
              likes:this.afterDATA.likes,
              love:this.afterDATA.love,
              sigh:this.afterDATA.sigh,
              wow:this.afterDATA.wow,
          }
      ]


      createSeries('comments','Comments','#a44336');
      createSeries('share', 'Share','#4caf50');
      createSeries('ahah', 'Ahah','#c39be5');
      createSeries('grrr', 'Grr','#7390e5');
      createSeries('likes', 'Like','#f64336');
      createSeries('love', 'Love','#4caff0');
      createSeries('sigh', 'Sigh','#f39be5');
      createSeries('wow', 'Wow','#032be5');

      function arrangeColumns() {

          let series = chart.series.getIndex(0);

          let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
          if (series.dataItems.length > 1) {
              let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
              let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
              let delta = ((x1 - x0) / chart.series.length) * w;
              if (am4core.isNumber(delta)) {
                  let middle = chart.series.length / 2;

                  let newIndex = 0;
                  chart.series.each(function(series) {
                      if (!series.isHidden && !series.isHiding) {
                          series.dummyData = newIndex;
                          newIndex++;
                      }
                      else {
                          series.dummyData = chart.series.indexOf(series);
                      }
                  })
                  let visibleCount = newIndex;
                  let newMiddle = visibleCount / 2;

                  chart.series.each(function(series) {
                      let trueIndex = chart.series.indexOf(series);
                      let newIndex = series.dummyData;

                      let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                      series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                      series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                  })
              }
          }
      }
  
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
