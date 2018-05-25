import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-deeds-recognized-expertiese',
  templateUrl: './recognized-expertiese.component.html',
  styleUrls: ['./recognized-expertiese.component.css']
})
export class RecognizedExpertieseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('RecognisedForm') RecognisedForm : any;
  recognized_exp_submit(){
  	console.log(this.RecognisedForm.controls);
  }

}
