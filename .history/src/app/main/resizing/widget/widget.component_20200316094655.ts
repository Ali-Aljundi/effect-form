import { Component, OnInit, Input } from '@angular/core';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { Observable } from 'rxjs';
import { fb_accounts_infos } from 'Model/fb_accounts_infos';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
@Input() title: string;
@Input() allCount: any;
@Input() count: any;
@Input() back: string;
@Input() color: string;

  constructor() { }
// tslint:disable-next-line:variable-name
public _fb_accounts_infos: Observable<fb_accounts_infos[]>;


}
