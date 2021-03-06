import { Component, OnInit, ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

  constructor(private api: APIServices, private formDataServices: FormDataService) { }

  ngOnInit() {
  }

  @ViewChild('WritingForm') WritingForm : any;
  submit_writing(){
    var writingForm = this.WritingForm;
    /*['specificActivity', 'PublicationName', 'ArticleTitle', 'month', 'year']*/
    var writingValues :any = [{
      JSONName: 'specificActivity',
      formName: ''
      },
      {
        JSONName: 'PublicationName',
        formName: ''
      },
      {
        JSONName: 'ArticleTitle',
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
    this.formDataServices.getData(writingForm,writingValues,(builtJSON:any) => {
      this.api.post(ApiStrings.WRITINGS, builtJSON, (response: Response) => {
        console.log(response);
      });
    }); 
  }

}
