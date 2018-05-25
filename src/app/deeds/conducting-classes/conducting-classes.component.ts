import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-deeds-conducting-classes',
  templateUrl: './conducting-classes.component.html',
  styleUrls: ['./conducting-classes.component.css']
})
export class ConductingClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('ConductingClassesForm') cond_class_form : any;
  submit_cond_classes(){
  	console.log(this.cond_class_form.controls);
  }

}
