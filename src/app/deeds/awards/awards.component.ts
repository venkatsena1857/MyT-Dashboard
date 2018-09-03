import { Component, OnInit,ViewChild } from '@angular/core';
import { FormDataService } from '../../services/formData.service';
import { APIServices } from '../../services/apiService.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';


@Component({
  selector: 'app-deeds-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  constructor(private formDataServices: FormDataService, private api: APIServices) { }

  ngOnInit() {
  }
    @ViewChild('AwardsForm') AwardsForm : any;

  submitawards(){
    var awardsForm  = this.AwardsForm;
    var awardValues :any = [
      {
        JSONName: 'specificActivity',
        formName: ''
      },
      {
        JSONName: 'AwardSponsor',
        formName: ''
      },
      {
        JSONName: 'AwardTitle',
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
  	this.formDataServices.getData(awardsForm, awardValues, (builtJSON: any)=>{
      this.api.post(ApiStrings.AWARDS,builtJSON,(response: Response) => {
        
      });
    });
  }

}
