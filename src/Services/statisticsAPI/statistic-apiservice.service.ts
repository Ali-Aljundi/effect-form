import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Account} from 'Model/fb_accounts_infos';

@Injectable({
  providedIn: 'root'
})

export class StatisticAPIserviceService {

  private _url = 'http://192.168.1.63:8080/sysc/statistics/post/';
  constructor(private http: HttpClient) { }

  getStatistic(id):Observable<statistic>{
    return this.http.get<statistic>(this._url+id);
    //return of (this.data);
  }

}
