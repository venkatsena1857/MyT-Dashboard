import { Component, OnInit,ViewChild } from '@angular/core';
import { MyTTable } from '../common/myTtable';
import { APIServices } from '../services/apiService.service';
import { TableBuilderService } from '../services/tableBuilderService.service';
import { GlobalServices} from '../services/globalServices.service';
import { ApiStrings } from '../common/apiStrings';
import {Response } from '@angular/http';
import { FormDataService } from '../services/formData.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls : ['./skills.component.css'] 
})

export class SkillsComponent implements OnInit {
  public skillsDataTable: MyTTable;
  
  public checkFormalProperty = false;
  public checkUsageProperty = false;
  constructor(private api:APIServices, private tableBuilder:TableBuilderService, private formDataService: FormDataService) {
    this.skillsDataTable = new MyTTable();
   }

  ngOnInit() {
    this.api.get(ApiStrings.TOOLS,(reponse:JSON)=> {
      var rules = GlobalServices.getRules();
      if(rules===null || rules === undefined) {
        this.api.get(ApiStrings.RULES,(rulesResponse:JSON) => {
          GlobalServices.setRules(rulesResponse);
          var skillsRules = rulesResponse['table'][ApiStrings.SKILLS];
          this.tableBuilder.build(this.skillsDataTable, skillsRules,reponse);
        })
      } else {
        var skillsRUles = rules['table'][ApiStrings.SKILLS]
        this.tableBuilder.build(this.skillsDataTable,skillsRUles,reponse);
      }
    })
  }

  @ViewChild('SkillForm') skillsform : any;
  submit_skills_details(){
    console.log(this.skillsform.controls);
    var skillDat = this.skillsform.controls;
    var skillFetcherJSON = [
      {
        JSONName: 'category',
        formName: 'Category'
      },
      {
        JSONName: 'softwareDeviceName',
        formName: 'methodName'
      },
      { 
        JSONName: 'vendorDistributor',
        formName: 'vendorName'
      },
      {
        JSONName: 'numberOfLinkedEndorsments',
        formName: 'endorsments'
      },
      {
        JSONName: 'proficiencyType',
        formName: 'proficiency_type_skill'
      },
      {
        JSONName: 'proficiencyYear',
        formName: 'proficiency_year'
      },
      {
        JSONName: 'formalCertification',
        formName: 'formal_certification'
      },
      {
        JSONName: 'usagein3Years',
        formName: 'optionsUsageRadios'
      }
    ]
    this.formDataService.getData(skillDat, skillFetcherJSON, (builtJSON: any) => {
      console.log("This is skills ")
      console.log(builtJSON);
          this.api.post(ApiStrings.SKILLS,builtJSON,(response: Response) => {
          console.log(response)
    })
    });

  }
  checkFormalChange(){
    if(this.checkFormalProperty == true){
      this.checkFormalProperty = false;
    }
    else{
      this.checkFormalProperty = true;
    }
    console.log(this.checkFormalProperty);
  }

  checkUsageChange(){
    if(this.checkUsageProperty == true){
      this.checkUsageProperty = false;
    }
    else{
      this.checkUsageProperty = true;
    }
    console.log(this.checkUsageProperty);
  }

addSkillsRecord(){
    document.getElementById('addSkillsRecord').style.display = "block";
  }
}
