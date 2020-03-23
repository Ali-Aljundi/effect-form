import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  panelOpenState = false;
  // tslint:disable-next-line:member-ordering
  movies = [
    {value_before: '<div>some content0</div>'},
    {value_before: '<div>some content1</div>'},
    {value_before: '<div>some content2</div>'},
    {value_before: '<div>some content3</div>'},
    {value_before: '<div>some content4</div>'},
    {value_before: '<div>some content5</div>'},
  ];

  // tslint:disable-next-line:typedef
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
