import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-deeds-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.css']
})
export class LeisureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('LeisureForm') LeisureForm : any;
  leisure_submit(){
  	console.log(this.LeisureForm.controls)
  }

}
