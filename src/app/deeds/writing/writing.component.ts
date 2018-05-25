import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-deeds-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('WritingForm') WritingForm : any;
  submit_writing(){
  	console.log(this.WritingForm.controls);
  }

}
