import { Component, ViewEncapsulation, ViewChild, ElementRef  } from '@angular/core';
// import a from './widget/widget.component.html';
import { createElement } from '@syncfusion/ej2-base';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { fb_accounts_infos } from 'Model/fb_accounts_infos';

@Component({
  selector: 'app-resizing',
  templateUrl: './resizing.component.html',
  styleUrls: ['./resizing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizingComponent
    {
      // tslint:disable-next-line:variable-name
      _fb_accounts_infos: fb_accounts_infos[] = [] ;
      constructor(private _FbAccountsInfosService: FbAccountsInfosService) { }
      public badgeContent: string[] = ['7 New', '27 New', '2 New', '14 New'];
        public cellSpacing: number[] = [5, 5];
        public columns = 5;
        public allowResizing = true;
        public resizableHandles: string[] = ['e-south-east', 'e-east', 'e-west', 'e-north', 'e-south'];
        public showGridLines = true;
        public draggableHandle = true;
        public titles: string[] = ['Earning', 'Debt'];
        public allCount: any[] = ['13B ', '60M '];
        public count: any[] = ['150M $', '12M $'];
        public back: string[] = [
          'this is the global earning',
        'this is the global debt'];
        public color: string[] = ['green', 'red']; 

        ngOnInit() {
          this.getInfo();
    }

    getInfo(): void{
      this._FbAccountsInfosService.getAccount().subscribe(data => {this._fb_accounts_infos = data; },
        err => console.error(err),
        () => console.log('Wiki Items Geladen') );

      console.log(this._fb_accounts_infos);
    }
    
  }
