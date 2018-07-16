import { Component, OnInit,ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor(private api: APIServices, private formDataService: FormDataService) { }

  ngOnInit() {
  }
  @ViewChild('CertForm') certsform : any;
  submit_certificate(){
    var certificateForm = this.certsform;
    var certificateValues :any = []
    this.formDataService.getData(certificateForm, certificateValues, (builtJSON :any)=>{
      this.api.post(ApiStrings.CERTIFICATES,builtJSON,(response: Response)=>{

      });
    });
  }

}
