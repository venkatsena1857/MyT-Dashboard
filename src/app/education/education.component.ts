import { Component, OnInit,ViewChild } from '@angular/core';
import {EducationInterface} from '../interfaces/education.interface';
import { error } from 'util';
import { APIServices } from '../services/apiService.service';
import { ApiStrings } from '../common/apiStrings';
import { GlobalServices } from '../services/globalServices.service';
import { MyTTable } from '../common/myTtable'
import {TableBuilderService} from '../services/tableBuilderService.service';
import { Response } from '@angular/http'

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

  
  constructor(private api: APIServices, private tableBuilder: TableBuilderService){
    this.educationData = new MyTTable();
    console.log(GlobalServices.getRules())
  }
  ngOnInit() {
    this.api.get(ApiStrings.EDUCATION,(response: JSON) => {
      console.log(response);
      console.log(this.educationData);
      console.log("Rules");
      var rules = GlobalServices.getRules();
      if(rules===undefined || rules === null) {
        this.api.get(ApiStrings.RULES, (rulesResponse: JSON) => {
          GlobalServices.setRules(rulesResponse);
          var educationRules = rulesResponse['table'][ApiStrings.EDUCATION]
          this.tableBuilder.build(this.educationData,educationRules,response);  
        }) 
      } else {
        var educationRules = rules['table'][ApiStrings.EDUCATION]
        this.tableBuilder.build(this.educationData,educationRules,response);
      }
    });

    for(let i = 2022 ; i > 1949 ; i--){
        this.StartdateArr.push(i.toString());
    }
    for(let i = 2022 ; i > 1949 ; i--){
        this.enddateArr.push(i.toString());
    }
  }

  @ViewChild('EducationForm') Educationform : any;

  submit_Education_Details(schoolName: string, major: string, degree: string,
    startyear:string, endyear: string, programstatus: string, honors: string){
      var educationJSON = {
        "schoolUniversityName": schoolName ,
        "majorFiedOfStudy" : major,
        "typeOfDegree": degree,
        "startYear": startyear,
        "endYear" :  endyear,
        "degreeProgramStatus" : programstatus
      }
      console.log(educationJSON);
      this.api.post(ApiStrings.EDUCATION, educationJSON, (response: Response) => {
          console.log(response);
      })
    }
  
   addEducationRecord(){
    document.getElementById('addEduRecord').style.display = "block";
  }

}



