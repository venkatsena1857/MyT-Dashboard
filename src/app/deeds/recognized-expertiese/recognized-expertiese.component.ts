import { Component, OnInit,ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-recognized-expertiese',
  templateUrl: './recognized-expertiese.component.html',
  styleUrls: ['./recognized-expertiese.component.css']
})
export class RecognizedExpertieseComponent implements OnInit {

  constructor(private api: APIServices, private formDataService: FormDataService) { }

  ngOnInit() {
  }

  @ViewChild('RecognisedForm') RecognisedForm : any;
  recognized_exp_submit(){
    var recognizedExpForm = this.RecognisedForm;
    /*['specificActivity', 'description', 'month', 'year']*/
    var recognizedValues: any = [{
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
    this.formDataService.getData(recognizedExpForm,recognizedValues,(builtJSON: any) => {
      this.api.post(ApiStrings.RECOGNIZED_EXPERTISE,builtJSON,(response: Response) => {
        console.log(response);
      });
    });
  }

}
