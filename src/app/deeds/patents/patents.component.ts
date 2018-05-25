import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-deeds-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.css']
})
export class PatentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('PatentsForm') PatentsForm : any;
  patents_submit(){
  	console.log(this.PatentsForm.controls);
  }

}
