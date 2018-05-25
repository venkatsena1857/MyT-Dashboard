import { Component, OnInit,ViewChild } from '@angular/core';
import {TableBuilderService} from '../services/tableBuilderService.service';
import { APIServices} from '../services/apiService.service';
import { MyTTable } from '../common/myTtable';
import { GlobalServices } from '../services/globalServices.service'
import { ApiStrings } from '../common/apiStrings';
import { Response } from '@angular/http'

// declare interface ToolsDataTable {
//   headerRow: string[];
//   dataRows: string[][];
// }

declare const $: any;

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  public toolsDataTable: MyTTable;
  public checkFormalProperty = false;

  constructor(private api:APIServices, private tableBuilder:TableBuilderService) { 
    this.toolsDataTable = new MyTTable();
  }

  category_for_dropdown: string []  = ["Software - USER", "Software - Programming", "Device Operation"];
  proficiency_types: string []=["Basic (> 25% Proficiency)", "Intermediate (> 50% Proficiency)", "Advanced (> 75% Proficiency)", "Expert (> 95% Proficiency)"];

  ngOnInit() {
    this.api.get(ApiStrings.TOOLS,(reponse:JSON)=> {
      var rules = GlobalServices.getRules();
      if(rules===null || rules ===undefined) {
        this.api.get(ApiStrings.RULES,(rulesResponse:JSON) => {
          GlobalServices.setRules(rulesResponse);
          var toolsRules = rulesResponse['table'][ApiStrings.TOOLS];
          this.tableBuilder.build(this.toolsDataTable,toolsRules,reponse);
        })
      } else {
        var toolsRules = rules['table'][ApiStrings.TOOLS]
        this.tableBuilder.build(this.toolsDataTable,toolsRules,reponse);
      }
    })
    
  }

  @ViewChild('ToolsForm') Toolsform : any;
  submit_tools_details(){
    console.log(this.Toolsform)
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


  addToolsRecord(){
    var toolsJSON = {}
    this.api.post(ApiStrings.TOOLS, toolsJSON, (responseJSON: Response)=> {
        this.tableBuilder.addRow(this.toolsDataTable,GlobalServices.getRules()[ApiStrings.TOOLS],null);
    })
  }

  }
