import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
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

  @ViewChild('EducationForm') education_form : any;

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

  submit_Education_Details(){
    if(this.education_form.controls.SchoolName.value  == ""
    ||this.education_form.controls.Major.value   == ""
    ||this.education_form.controls.degree_program_type.value == ""
    ||this.education_form.controls.start_year.value == ""
    ||this.education_form.controls.end_year.value == ""
    ||this.education_form.controls.degree_program_status.value == ""
    ||this.education_form.controls.honors_id.value == ""){
    alert("Please fill all the fields");
    }
    console.log(this.education_form.controls)
      var educationJSON = {
        "schoolUniversityName" : this.education_form.controls.SchoolName.value,
        "majorFiedOfStudy" : this.education_form.controls.Major.value,
        "typeOfDegree" : this.education_form.controls.degree_program_type.value,
        "startYear" : this.education_form.controls.start_year.value,
        "endYear" : this.education_form.controls.end_year.value,
        "degreeProgramStatus" : this.education_form.controls.degree_program_status.value
      }
      if(this.education_form.controls.honors_id.value!=null) {
        educationJSON['honors'] = this.education_form.controls.honors_id.value
      }
      this.api.post(ApiStrings.EDUCATION, educationJSON, (response: Response) => {
          if(response.status === 201) {
            var row = {
              "school": educationJSON["schoolUniversityName"],
              "field" : educationJSON["majorFiedOfStudy"], 
              "typeOfDegree": educationJSON["typeOfDegree"],
              "status": educationJSON["degreeProgramStatus"],
              "end": educationJSON["endYear"]
            }
            this.tableBuilder.addRow(this.educationData,GlobalServices.getRules()['table'][ApiStrings.EDUCATION],row) 
            alert("Education record added successfully")
          } else {
            alert("Unable to add");
          }
      })
    }
  
   addEducationRecord(){
    document.getElementById('addEduRecord').style.display = "block";
  }

}



