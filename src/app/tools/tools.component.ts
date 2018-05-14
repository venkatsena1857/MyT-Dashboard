import { Component, OnInit,ViewChild } from '@angular/core';



declare interface ToolsDataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  public toolsDataTable: ToolsDataTable;

  constructor() { }

  category_for_dropdown: string []  = ["Software - USER", "Software - Programming", "Device Operation"];
  proficiency_types: string []=["basic", "inter", "advanced", "expert"]

  ngOnInit() {
    this.toolsDataTable = {
      headerRow: ['Sl. No',
                  'Category',
                  'Method/Skill Name',
                  'Vendor/Distributor',
                  'Endorsments',
                  'Proficiency Type',
                  'Proficiency Year',
                  'Formal Certification',
                  'Usage in Last 3 Years',
                  'Actions'],
      dataRows: [['Sl. No',
                  'Category',
                  'Method/Skill Name',
                  'Vendor/Distributor',
                  'Endorsments',
                  'Proficiency Type',
                  'Proficiency Year',
                  'Formal Certification',
                  'Usage in Last 3 Years',
                  'Actions']]
    }
  }

  @ViewChild('ToolsForm') Toolsform : any;
  submit_tools_details(){
    console.log(this.Toolsform)
  }
}
