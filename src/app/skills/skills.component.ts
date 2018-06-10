import { Component, OnInit,ViewChild } from '@angular/core';
import { MyTTable } from '../common/myTtable';
import { APIServices } from '../services/apiService.service';
import { TableBuilderService } from '../services/tableBuilderService.service';
import { GlobalServices} from '../services/globalServices.service';
import { ApiStrings } from '../common/apiStrings';
import {Response } from '@angular/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls : ['./skills.component.css'] 
})

export class SkillsComponent implements OnInit {
  public skillsDataTable: MyTTable;
  
  public checkFormalProperty = false;
  public checkUsageProperty = false;
  constructor(private api:APIServices, private tableBuilder:TableBuilderService) {
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
    var skillsJSON = {
          "category": skillDat.Category,
          "softwareDeviceName": skillDat.methodName,
          "vendorDistributor": skillDat.vendorName,
          "numberOfLinkedEndorsments": skillDat.endorsments,
          "proficiencyType": skillDat.proficiency_type_skill,
          "proficiencyYear": skillDat.proficiency_year,
          "formalCertification": skillDat.formal_certification,
          "usagein3Years": skillDat.optionsUsageRadios      
        }
    this.api.post(ApiStrings.SKILLS,skillsJSON,(response: Response) => {
      console.log(response)
    })
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
