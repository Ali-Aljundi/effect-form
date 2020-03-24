import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rows: any[];
  loadingIndicator: boolean;
  reorderable: boolean;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
      private _httpClient: HttpClient
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
    this._httpClient.get('api/contacts-contacts')
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((contacts: any) => {
        this.rows = contacts;
        this.loadingIndicator = false;
    });
  }

}
