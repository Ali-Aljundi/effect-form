import { Component, ViewEncapsulation, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-resizing',
  templateUrl: './resizing.component.html',
  styleUrls: ['./resizing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizingComponent
    {
      // tslint:disable-next-line:variable-name
     
     
        public badgeContent: string[] = ['7 New', '27 New', '2 New', '14 New'];
        public cellSpacing: number[] = [5, 5];
        public columns = 5;
        public allowResizing = true;
        public resizableHandles: string[] = ['e-south-east', 'e-east', 'e-west', 'e-north', 'e-south'];
        public showGridLines = true;

       // public draggableHandle = true;
        public titles: string[] = ['Earning', 'Debt'];
        public allCount: any[] = ['13B ', '60M '];
        public count: any[] = ['150M $', '12M $'];
        public back: string[] = [
          'this is the global earning',
        'this is the global debt'];
        public color: string[] = ['green', 'red']; 
        public id: any[] = ['chart1', 'chart2', 'chart3', 'chart4' , 'chart5', 'chart6'];
        // tslint:disable-next-line:typedef
        // tslint:disable-next-line:use-lifecycle-interface
      
  }
