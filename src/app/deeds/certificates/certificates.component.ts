import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-deeds-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('CertForm') certsform : any;
  submit_certificate(){
  	console.log(this.certsform.controls);
  }

}
