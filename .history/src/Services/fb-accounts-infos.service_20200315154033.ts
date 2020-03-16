import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fb_accounts_infos } from 'Model/fb_accounts_infos';

@Injectable({
  providedIn: 'root'
})
export class FbAccountsInfosService {

  private _url = 'http:\\127.0.0.1\Application_Info';
  constructor(private http: HttpClient) { }

  getAccount(): Observable<fb_accounts_infos[]>{
    return this.http.get<fb_accounts_infos[]>(this._url);
  }
}
