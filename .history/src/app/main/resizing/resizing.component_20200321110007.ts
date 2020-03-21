import { Component, ViewEncapsulation, ViewChild, ElementRef  } from '@angular/core';
// import a from './widget/widget.component.html';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';

@Component({
  selector: 'app-resizing',
  templateUrl: './resizing.component.html',
  styleUrls: ['./resizing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizingComponent
    {
      // tslint:disable-next-line:variable-name
     
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
        
        // tslint:disable-next-line:typedef
        // tslint:disable-next-line:use-lifecycle-interface
        ngOnInit() {}
  }
