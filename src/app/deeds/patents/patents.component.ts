import { Component, OnInit,ViewChild } from '@angular/core';
import { APIServices } from '../../services/apiService.service';
import { FormDataService } from '../../services/formData.service';
import { ApiStrings } from '../../common/apiStrings';
import { Response } from '@angular/http';

@Component({
  selector: 'app-deeds-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.css']
})
export class PatentsComponent implements OnInit {

  constructor(private api: APIServices, private formServices: FormDataService) { }

  ngOnInit() {
  }
  @ViewChild('PatentsForm') PatentsForm : any;
  patents_submit(){
    var patentsForm = this.PatentsForm;
    var patentsValues :any = [];
    this.formServices.getData(patentsForm,patentsValues, (builtJSON: any) => {
      this.api.post(ApiStrings.PATENTS, builtJSON, (response: Response) => {
        console.log(response);
      });
    });
  }

}
