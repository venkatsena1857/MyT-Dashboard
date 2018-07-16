import { Component, OnInit, ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-mentoring',
  templateUrl: './mentoring.component.html',
  styleUrls: ['./mentoring.component.css']
})
export class MentoringComponent implements OnInit {

  constructor(private api: APIServices, private formDataService: FormDataService) { 

  }

  ngOnInit() {
    console.log("Initiated");
  }
  
  @ViewChild('MentoringForm') MentoringForm : any;

  mentoring_submit() {
    var mentoringForm = this.MentoringForm;
    var mentoringValues: any = [];
     this.formDataService.getData(mentoringForm,mentoringValues, (builtJSON:any) => {
        this.api.post(ApiStrings.MENTORING, builtJSON, (response: Response) => {
          console.log(response);
        })
     });
  }
}
