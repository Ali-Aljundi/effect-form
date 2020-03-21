import { Component,ViewEncapsulation,ViewChild, ElementRef  } from '@angular/core';
//import a from './widget/widget.component.html';
import { createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-resizing',
  templateUrl: './resizing.component.html',
  styleUrls: ['./resizing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizingComponent
    {
      public badgeContent: string[] = ['7 New', '27 New', '2 New', '14 New'];
        public cellSpacing: number[] = [5, 5];
        public columns: number = 5;
        public allowResizing: boolean = true;
        public resizableHandles: string[] = ['e-south-east','e-east','e-west','e-north','e-south'];
        public showGridLines : boolean=false;

        public titles:string[]=["Earning","Debt"];
        public allCount:any[]=["13B ","60M "];
        public count:any[]=["150M $","12M $"];
        public back:string[]=[
          "this is the global earning",
        "this is the global debt"];
        public color:string[]=["green","red"]; 
        public id:any[]=['chart1','chart2','chart3','chart4'];
    }