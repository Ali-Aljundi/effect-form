import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent {
    @Input() turn:boolean;
    @Input() text:string;
    @Input() color:string;
    @Input() size:number;

    color1="red";
constructor(){
  //this.color1=this.color
}

    
}
