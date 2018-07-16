import { Component, OnInit,ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.css']
})
export class LeisureComponent implements OnInit {

  constructor(private api: APIServices, private formDataService : FormDataService) { }

  ngOnInit() {
  }
  @ViewChild('LeisureForm') LeisureForm : any;
  leisure_submit(){
    var leisureForm = this.LeisureForm;
    var leisureValues: any = [];
    this.formDataService.getData(leisureForm, leisureValues, (builtJSON: any)=> {
      this.api.post(ApiStrings.LEISURE_TRAVEL,builtJSON,(response: Response)=>{
        console.log(response);
      });
    });
  }

}
