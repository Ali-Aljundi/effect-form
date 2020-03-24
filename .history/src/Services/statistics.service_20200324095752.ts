import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private _url = 'http://192.168.1.63:8080/sysc/statistics/post/similarity?text=كورونا';
  constructor(private http: HttpClient) { }


  getStatistics(): Observable<any>{
    return this.http.get<any>(this._url);
  }
}
