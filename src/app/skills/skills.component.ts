import { Component, OnInit,ViewChild } from '@angular/core';
import { MyTTable } from '../common/myTtable';
import { APIServices } from '../services/apiService.service';
import { TableBuilderService } from '../services/tableBuilderService.service';
import { GlobalServices} from '../services/globalServices.service';
import { ApiStrings } from '../common/apiStrings';

// declare interface SkillsDataTable {
//   headerRow: string[];
//   footerRow: string[];
//   dataRows: string[][];
// }
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
    console.log(this.skillsform.controls)
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
