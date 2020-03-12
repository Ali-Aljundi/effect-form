import { Component,ViewEncapsulation,ViewChild, ElementRef  } from '@angular/core';
//import a from './widget/widget.component.html';


@Component({
  selector: 'app-resizing',
  templateUrl: './resizing.component.html',
  styleUrls: ['./resizing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizingComponent
    {
        public cellSpacing: number[] = [5, 5];
        public columns: number = 5;
        public allowResizing: boolean = true;
        public resizableHandles: string[] = ['e-south-east','e-east','e-west','e-north','e-south'];
    }
