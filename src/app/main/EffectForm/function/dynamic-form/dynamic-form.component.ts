import { Component, OnInit, Input,Output } from '@angular/core';
import {addTextarea} from '../../function/addfield';
import {removeTextArea} from '../../function/removefield';
import {JoinField} from '../../function/mergefield'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
@Input() form:FormGroup;
@Input() nameOFfield




  constructor( private _formBuilder: FormBuilder,) { }

  List:any[]= [];
  public valueList:any[]=[];
 controlerCount:number=0;
  class;
  
  ngOnInit() {}

 ADDdisable():boolean{if(this.form.get(this.nameOFfield).value == null){return true} else{return false}}

  addTextarea(){ 
    [this.List,this.form,this.controlerCount]=addTextarea(this.List,this.form,this._formBuilder,this.nameOFfield,this.controlerCount); 
  this.class='Groub';
   
}

removeTextArea(index){
[this.List,this.form,this.class]=removeTextArea(this.form,this.List,this.class,index,this.valueList,this.nameOFfield);

}

JoinUrls(){
    [this.form,this.valueList]=JoinField(this.valueList,this.form,this.List,this.form.value.urls);
    return this.valueList
}

}
