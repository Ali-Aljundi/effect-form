import { Component, ViewEncapsulation, ViewChild, ElementRef  } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

        constructor() { }
        // tslint:disable-next-line:typedef
        ngOnInit() {
        }
        // tslint:disable-next-line:member-ordering
        panelOpenState = false;
        // tslint:disable-next-line:member-ordering
        movies = [
          'Episode I - The Phantom Menace',
          'Episode II - Attack of the Clones',
          'Episode III - Revenge of the Sith',
          'Episode IV - A New Hope',
          'Episode V - The Empire Strikes Back',
          'Episode VI - Return of the Jedi',
          'Episode VII - The Force Awakens',
          'Episode VIII - The Last Jedi',
          'Episode IX – The Rise of Skywalker'
        ];
      
        // tslint:disable-next-line:typedef
        drop(event: CdkDragDrop<string[]>) {
          moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        }
      
  }
