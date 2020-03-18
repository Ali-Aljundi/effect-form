import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {post_info} from 'Model/post_info';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostDataService {
private api_url='http://192.168.1.63:8080/sysc/effect_activity';
  constructor(private httpclient: HttpClient) { }
postdata(opost:post_info):Observable<any>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.httpclient.post(this.api_url,opost,httpOptions);
  }
}
