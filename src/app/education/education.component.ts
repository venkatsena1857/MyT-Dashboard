import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {EducationInterface} from '../interfaces/education.interface';
import { error } from 'util';
import { APIServices } from '../services/apiService.service';
import { ApiStrings } from '../common/apiStrings';
import { GlobalServices } from '../services/globalServices.service';
import { MyTTable } from '../common/myTtable'
import {TableBuilderService} from '../services/tableBuilderService.service';
import { FormDataService } from '../services/formData.service';
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

  constructor(private api: APIServices, private tableBuilder: TableBuilderService, private formDataService: FormDataService){
    this.educationData = new MyTTable();
    console.log(GlobalServices.getRules())
  }
  ngOnInit() {
    this.api.get(ApiStrings.EDUCATION,(response: JSON) => {
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
      var educationForm = this.education_form;
      var educationValues: any = [
        {
          JSONName: 'schoolUniversityName',
          formName: 'SchoolName'
        }, 
        {
          JSONName: 'majorFiedOfStudy',
          formName: 'Major'
        },
        {
          JSONName: 'typeOfDegree',
          formName: 'degree_program_type'
        },
        {
          JSONName: 'startYear',
          formName: 'start_year'
        },
        {
          JSONName: 'endYear',
          formName: 'end_year'
        },
        {
          JSONName: 'degreeProgramStatus',
          formName: 'degree_program_status'
        }, 
        {
          JSONName: 'honors',
          formName: 'honors_id',
          mandatory: false
        }
      ];

      this.formDataService.getData(educationForm, educationValues, (builtJSON: any) => {
        this.api.post(ApiStrings.EDUCATION, builtJSON, (response: Response) => {
          if(response.status === 201) { 
            alert("Education record added successfully")
          } else {
            alert("Unable to add");
          }
      })  
      })
    }
  
   addEducationRecord(){
    document.getElementById('addEduRecord').style.display = "block";
  }

}



