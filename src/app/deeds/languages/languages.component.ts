import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-deeds-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('LanguageForm') LanguageForm : any;
  language_submit(){
  	console.log(this.LanguageForm.controls)
  }

}
