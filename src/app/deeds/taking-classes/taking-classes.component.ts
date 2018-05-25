import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-deeds-taking-classes',
  templateUrl: './taking-classes.component.html',
  styleUrls: ['./taking-classes.component.css']
})
export class TakingClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('TakingClassesForm') TakingClassesForm : any;
  submit_taking_classes(){
  	console.log(this.TakingClassesForm.controls);
  }

}
