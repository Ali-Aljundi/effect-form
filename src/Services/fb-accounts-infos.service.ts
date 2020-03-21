import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
<<<<<<< HEAD
import { Account} from 'Model/fb_accounts_infos';
=======
<<<<<<< HEAD
import { FbAccountsInfos } from 'Model/fb_accounts_infos';
import { EffectActivity } from 'Model/effect_activity';
=======
import { Account} from 'Model/fb_accounts_infos';
>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569

@Injectable({
  providedIn: 'root'
})
export class FbAccountsInfosService {

  private _url = 'http://192.168.1.63:8080/sysc/application_info';
  constructor(private http: HttpClient) { }


<<<<<<< HEAD
  getAccount(): Observable<Account>{
    return this.http.get<Account>(this._url);
=======
<<<<<<< HEAD
  Post_Effect_Activity(effectActivity: EffectActivity): Observable<EffectActivity>{
    { 
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<EffectActivity>(this._url + 'effect_activity', effectActivity, httpOptions);  
    }
=======
  getAccount():Observable<Account>{
    return this.http.get<Account>(this._url);
    //return of (this.data);
>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569
  }
}
