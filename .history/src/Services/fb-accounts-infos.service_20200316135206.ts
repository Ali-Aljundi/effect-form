import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { fb_accounts_infos } from 'Model/fb_accounts_infos';

@Injectable({
  providedIn: 'root'
})
export class FbAccountsInfosService {

  private _url = 'http://192.168.1.63:8080/sysc/application_info';
  constructor(private http: HttpClient) { }

  data = this.http.get<any[]>(this._url);

  // tslint:disable-next-line:typedef
  getAccount(){
    console.log(this.data);
    return of (this.data);
    
  }
}
