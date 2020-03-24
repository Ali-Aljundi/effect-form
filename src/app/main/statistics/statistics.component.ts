import { Component, OnInit } from '@angular/core';
import {statistic} from '../../../Model/statistics';
import {StatisticAPIserviceService} from '../../../Services/statisticsAPI/statistic-apiservice.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statisticDATA=new statistic();

  public showGraph=false
  constructor(
    private statisticAPIservice:StatisticAPIserviceService
  ) 
  { this.callAPI(2342288692540044)}

  ngOnInit() {
  }
   callAPI(id){
        this.statisticAPIservice.getStatistic(id).subscribe(data=>{this.statisticDATA=
        {
          now:(data as any).now,
          after:(data as any).after,
          before:(data as any).before
        }
        console.log(this.statisticDATA);
        this.showGraph=true;
        }
          
          )
            }
}
