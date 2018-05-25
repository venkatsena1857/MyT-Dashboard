import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {EducationInterface} from '../interfaces/education.interface';
import { error } from 'util';
import { APIServices } from '../services/apiService.service';
import { ApiStrings } from '../common/apiStrings';
import { GlobalServices } from '../services/globalServices.service';
import { MyTTable } from '../common/myTtable'
import {TableBuilderService} from '../services/tableBuilderService.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls : ['./education.component.css']
})

export class EducationComponent implements OnInit {
  public educationData: MyTTable;
  educationToPost : EducationInterface;  

  type_of_degree_program: string[] = ["High School diploma",
                        "BS",
                        "BA",
                        "MS",
                        "MA",
                        "Ph.D",
                        "MBA",
                        "MD",
                        "LLD"];
  degree_program_status: string []  = ["In progress",
                        "Degree Awarded",
                        "Degree - Add'l field of Study"];
  honors: string[] = ["Valedictorian",
                        "Cum Laude",
                        "Magna Cum Laude",
                        "Summa Cum Laude",
                        "None"];
  StartdateArr : string[] = ['2023'];
  enddateArr : string[] = ['2023'];

  @ViewChild('EducationForm') education_form : any;

  submit_Education_Details(){
    console.log(this.education_form.controls)
  }

  constructor(private api: APIServices, private tableBuilder: TableBuilderService){
    this.educationData = new MyTTable();
    console.log(GlobalServices.getRules())
  }
  ngOnInit() {
    /*this.api.get(ApiStrings.EDUCATION,(response: JSON) => {
      console.log(response);
      console.log(this.educationData);
      console.log("Rules");
      var rules = GlobalServices.getRules();
      var educationRules = rules['table'][ApiStrings.EDUCATION]
      console.log(educationRules)
      this.tableBuilder.build(this.educationData,educationRules,response);
      console.log(this.educationData);
    });*/

    for(let i = 2022 ; i > 1949 ; i--){
        this.StartdateArr.push(i.toString());
    }
    for(let i = 2022 ; i > 1949 ; i--){
        this.enddateArr.push(i.toString());
    }
  }

  
  
   addEducationRecord(){
    document.getElementById('addEduRecord').style.display = "block";
  }

}



