import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FbAccountsInfos } from 'Model/fb_accounts_infos';
import { EffectActivity } from 'Model/effect_activity';

@Injectable({
  providedIn: 'root'
})
export class FbAccountsInfosService {

  private _url = 'http://192.168.1.63:8080/sysc/';
  constructor(private http: HttpClient) { }

  getAccount(): Observable<FbAccountsInfos[]>{
    return this.http.get<FbAccountsInfos[]>(this._url + 'application_info');
  }

  Post_Effect_Activity(effectActivity: EffectActivity): Observable<EffectActivity>{
    { 
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<EffectActivity>(this._url + 'effect_activity', effectActivity, httpOptions);  
    }
  }
}
