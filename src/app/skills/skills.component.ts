import { Component, OnInit } from '@angular/core';

declare interface SkillsDataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls : ['./skills.component.css'] 
})
export class SkillsComponent implements OnInit {
  public skillsDataTable: SkillsDataTable
  
  public checkFormalProperty = false;
  public checkUsageProperty = false;
  constructor() { }

  ngOnInit() {
    this.skillsDataTable = {
      headerRow: ['Sl. No','Category','Software/Device Name','Vendor/Distributor','Endorsements','Proficiency Type','Proficiency Year','Formal Certification', 'Usage in Last 3 Years','Actions'],
      footerRow: ['Sl. No','Category','Software/Device Name','Vendor/Distributor','Endorsements','Proficiency Type','Proficiency Year','Formal Certification', 'Usage in Last 3 Years','Actions'],
      dataRows: [['Sl. No','Category','Software/Device Name','Vendor/Distributor','Endorsements','Proficiency Type','Proficiency Year','Formal Certification', 'Usage in Last 3 Years','Actions']]
    }
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
