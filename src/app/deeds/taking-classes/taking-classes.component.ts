import { Component, OnInit,ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-taking-classes',
  templateUrl: './taking-classes.component.html',
  styleUrls: ['./taking-classes.component.css']
})
export class TakingClassesComponent implements OnInit {

  constructor(private api: APIServices, private formDataService: FormDataService) { }

  ngOnInit() {
  }

  @ViewChild('TakingClassesForm') TakingClassesForm : any;
  submit_taking_classes(){
    var takingClassesForm = this.TakingClassesForm;
    var takingClassesValues: any = []
    this.formDataService.getData(takingClassesForm,takingClassesValues, (builtJSON: any) => {
      this.api.post(ApiStrings.TAKING_CLASSES,builtJSON,(response: Response) => {

      });
    });
  }

}
