import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-deeds-confrences',
  templateUrl: './confrences.component.html',
  styleUrls: ['./confrences.component.css']
})
export class ConfrencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('ConferencesForm') ConferencesForm : any;
  conferences_submit(){
  	console.log(this.ConferencesForm.controls);
  }

}
