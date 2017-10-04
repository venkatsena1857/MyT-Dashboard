import { Component, OnInit } from '@angular/core';

declare interface SkillsDataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  public skillsDataTable: SkillsDataTable
  
  constructor() { }

  ngOnInit() {
    this.skillsDataTable = {
      headerRow: ['Sl. No','Category','Software/Device Name','Vendor/Distributor','Endorsements','Proficiency Type','Proficiency Year','Formal Certification', 'Usage in Last 3 Years','Actions'],
      footerRow: ['Sl. No','Category','Software/Device Name','Vendor/Distributor','Endorsements','Proficiency Type','Proficiency Year','Formal Certification', 'Usage in Last 3 Years','Actions'],
      dataRows: []
    }
  }

}
