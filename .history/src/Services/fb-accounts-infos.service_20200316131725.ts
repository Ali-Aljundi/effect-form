import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fb_accounts_infos } from 'Model/fb_accounts_infos';

@Injectable({
  providedIn: 'root'
})
export class FbAccountsInfosService {

  private _url = 'http://192.168.1.63:8080/sysc/application_info';
  constructor(private http: HttpClient) { }

  getAccount(): Observable<any[]>{
    return this.http.get<fb_accounts_infos[]>(this._url);
  }
}
