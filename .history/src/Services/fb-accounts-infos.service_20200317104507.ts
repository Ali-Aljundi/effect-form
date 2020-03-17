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
/*
  data = { fb_accounts_infos: [
        {
            type: 'mobile',
            total_count: 131,
            active_count: 0
        },
        {
            type: 'email',
            total_count: 22,
            active_count: 0
        }
    ],
    fb_effect_types: [
        'comment',
        'share',
        'like',
        'ahah',
        'love',
        'wow',
        'sigh',
        'grrr'
    ],
    fb_url_types: [
        'page',
        'profile',
        'group',
        'post'
    ],
    fb_account_types: [
        'mobile',
        'email'
    ]
};
*/
  getAccount(): Observable<FbAccountsInfos[]>{
    this._url += 'application_info';
    return this.http.get<FbAccountsInfos[]>(this._url);
    // return of (this.data);
  }

  Post_Effect_Activity(accountTypes: FbAccountsInfos): Observable<FbAccountsInfos>{
    { 
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<FbAccountsInfos>(this._url + 'effect_activity', accountTypes, httpOptions);  
    }
  }
}
