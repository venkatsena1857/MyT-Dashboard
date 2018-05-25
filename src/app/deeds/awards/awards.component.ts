import { Component, OnInit,ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-deeds-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    @ViewChild('AwardsForm') AwardsForm : any;

  submitawards(){
  	console.log(this.AwardsForm.controls);
  }

}
