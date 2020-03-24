import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { StatisticsService } from 'Services/statistics.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rows: any[];
  selected = [];
  id: number;
  loadingIndicator: boolean;
  reorderable: boolean;
  isLoading = false;
  isContnetShowed = false;
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
      private _httpClient: HttpClient,
      private statisticService: StatisticsService
  )
  {
      // Set the defaults
      this.loadingIndicator = true;
      this.reorderable = true;

      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      
  }

  /**
   * On destroy
   */
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  fillTable(): void  {
    this.isContnetShowed = true;
    this.isLoading = true;
    this.statisticService.getStatistics((document.getElementById('search') as HTMLInputElement).value)
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((statistisc: any) => {
        this.isLoading = false;
        this.rows = statistisc;
        this.loadingIndicator = false;
    });
  }
  postStatistics(): void{
    console.log(this.id);
  }
  
  // tslint:disable-next-line:typedef
  onSelect(row) {
    this.id = row[0].id;
    console.log(row.id);
  }
}
