import { Component, ViewEncapsulation, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-resizing',
  templateUrl: './resizing.component.html',
  styleUrls: ['./resizing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizingComponent implements OnInit
    {
      // tslint:disable-next-line:variable-name
      constructor() { }
      // tslint:disable-next-line:typedef
      ngOnInit() {
      }
      // tslint:disable-next-line:member-ordering
      panelOpenState = false;
      // tslint:disable-next-line:member-ordering
      movies = [
        { value: 'First Section', disabled: false},
        { value: 'Second Section', disabled: false},
        { value: 'Third Section', disabled: false}
      ];
    
      // tslint:disable-next-line:typedef
      drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
      }
     
        // tslint:disable-next-line:member-ordering
        public badgeContent: string[] = ['7 New', '27 New', '2 New', '14 New'];
        // tslint:disable-next-line:member-ordering
        public cellSpacing: number[] = [5, 5];
        // tslint:disable-next-line:member-ordering
        public columns = 5;
        // tslint:disable-next-line:member-ordering
        public allowResizing = true;
        // tslint:disable-next-line:member-ordering
        public resizableHandles: string[] = ['e-south-east', 'e-east', 'e-west', 'e-north', 'e-south'];
        // tslint:disable-next-line:member-ordering
        public showGridLines = true;

       // public draggableHandle = true;
        // tslint:disable-next-line:member-ordering
        public titles: string[] = ['Earning', 'Debt'];
        // tslint:disable-next-line:member-ordering
        public allCount: any[] = ['13B ', '60M '];
        // tslint:disable-next-line:member-ordering
        public count: any[] = ['150M $', '12M $'];
        // tslint:disable-next-line:member-ordering
        public back: string[] = [
          'this is the global earning',
        'this is the global debt'];
        // tslint:disable-next-line:member-ordering
        public color: string[] = ['green', 'red']; 
        
        // tslint:disable-next-line:member-ordering
        public id: any[] = ['chart1', 'chart2', 'chart3', 'chart4' , 'chart5', 'chart6'];
        // tslint:disable-next-line:typedef
        // tslint:disable-next-line:use-lifecycle-interface

        onExpand(index: number): void { 
              this.movies[index].disabled = !this.movies[index].disabled;
              console.log('disabled ' + index  + ' ' + this.movies[index].disabled);
        }


  }
