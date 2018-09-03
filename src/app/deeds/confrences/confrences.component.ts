import { Component, OnInit,ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-confrences',
  templateUrl: './confrences.component.html',
  styleUrls: ['./confrences.component.css']
})
export class ConfrencesComponent implements OnInit {

  constructor(private api: APIServices, private formDataServices: FormDataService) { }

  ngOnInit() {
  }
  @ViewChild('ConferencesForm') ConferencesForm : any;
  conferences_submit(){
    var confrenceForm = this.ConferencesForm;
    /*['specificActivity', 'ConferenceSponsor', 'PresentationTitle', 'month', 'year']*/
    var confrenceValues: any = [
      {
      JSONName: 'specificActivity',
      formName: ''
      },
      {
        JSONName: 'ConferenceSponsor',
        formName: ''
      },
      {
        JSONName: 'PresentationTitle',
        formName: ''
      },
      {
        JSONName: 'month',
        formName: ''
      }, 
      {
        JSONName: 'year',
        formName: ''
      }
  ];
    this.formDataServices.getData(confrenceForm, confrenceValues, (builtJSON: any) => {
      this.api.post(ApiStrings.CONFERENCES,builtJSON,(response: Response) => {
        console.log(response);
      });
    });
  }

}
