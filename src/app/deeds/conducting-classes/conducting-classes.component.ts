import { Component, OnInit,ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-conducting-classes',
  templateUrl: './conducting-classes.component.html',
  styleUrls: ['./conducting-classes.component.css']
})
export class ConductingClassesComponent implements OnInit {

  constructor(private api: APIServices, private formDataServices: FormDataService) { }

  ngOnInit() {
  }

  @ViewChild('ConductingClassesForm') cond_class_form : any;
  submit_cond_classes(){
    var condForm = this.cond_class_form;
    /*['specificActivity', 'description', 'month', 'year']*/
    var condValues:any = [
      {
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
      }
    ];
    this.formDataServices.getData(condForm,condValues,(builtJOSN:any)=>{
      this.api.post(ApiStrings.CONDUCTING_CLASSES,builtJOSN,(response: Response)=>{

      });
    })
  }

}
