import { Component, OnInit, Input } from '@angular/core';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { Observable } from 'rxjs';

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

// tslint:disable-next-line:typedef
ngOnInit(){
  
}

}
