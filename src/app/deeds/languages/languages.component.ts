import { Component, OnInit,ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor(private api: APIServices, private formDataService: FormDataService) { }

  ngOnInit() {
  }
  @ViewChild('LanguageForm') LanguageForm : any;
  language_submit(){
    var languageForm = this.LanguageForm;
    /*['specificActivity', 'description', 'month', 'year']*/
    var languageValues: any = [{
      JSONName: 'specificActivity',
      formName: ''
      },
      {
        JSONName: 'description',
        formName: ''
      },
      {
        JSONName: 'month',
        formName: ''
      },
      {
        JSONName: 'year',
        formName: ''
      }];
    this.formDataService.getData(languageForm, languageValues, (builtJSON: any) => {
      this.api.post(ApiStrings.LANGUAGES,builtJSON,(response: Response) => {
        console.log(response);
      });
    });
  }

}
