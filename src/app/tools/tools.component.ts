import { Component, OnInit } from '@angular/core';

declare interface ToolsDataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

//declare const $: any;

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
})
export class ToolsComponent implements OnInit {
  public toolsDataTable: ToolsDataTable;

  constructor() { }

  ngOnInit() {
    this.toolsDataTable = {
      headerRow: [ 'Sl. No', 'Category', 'Method/Skill Name', 'Vendor/Distributor', 'Endorsments', 'Proficiency Type', 'Proficiency Year', 'Formal Certification','Usage in Last 3 Years', 'Actions' ],
      footerRow: [ 'Sl. No', 'Category', 'Method/Skill Name', 'Vendor/Distributor', 'Endorsments', 'Proficiency Type', 'Proficiency Year', 'Formal Certification','Usage in Last 3 Years', 'Actions' ],

      dataRows: []
    }
  }

}
