import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {addTextarea} from '../../component/addfield';
import {removeTextArea} from '../../component/removefield';
import {JoinField} from '../../component/mergefield'
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
@Input() form:FormGroup;
@Input() nameOFfield:string;

@Output() finlevalue = new EventEmitter();

  constructor( private _formBuilder: FormBuilder,) { }

  List:any[]= [];
  public valueList:any[]=[];
 controlerCount:number=0;
 finleList;
  class;
  
  ngOnInit() {
  
  }

 ADDdisable():boolean{if(this.form.get(this.nameOFfield).value == null){return true} else{return false}}

  addTextarea(){ 
    [this.List,this.form,this.controlerCount]=addTextarea(this.List,this.form,this._formBuilder,this.nameOFfield,this.controlerCount); 
  this.class='Groub';
   
}

removeTextArea(index){
[this.List,this.form,this.class]=removeTextArea(this.form,this.List,this.class,index,this.valueList,this.nameOFfield);

}

Join(){
 var firstvalue =this.form.get(this.nameOFfield).value;
    [this.form,this.finleList]=JoinField(this.valueList,this.form,this.List,firstvalue);
    this.finlevalue.emit(this.finleList)
    
}

}
