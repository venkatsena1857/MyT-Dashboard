import { Component, OnInit } from '@angular/core';


declare interface EducationData{
  header:string [];
  dataRows: string[][];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {
  public educationData: EducationData;


  public tableData1: {};

  ngOnInit() {
    this.educationData = {
      header:[ 'School Name', 'Major', 'Program type', 'Status', 'Honors' ,'Start year', 'End year', '' ],
      dataRows: [
        ['San Jose State University', 'SE', 'Masters', 'Completed', 'Science', '2015','2017'],
        ['Osmania University', 'CSE', 'Bachelors', 'Completed', 'Science', '2011','2015']
    ]
    }
  	this.tableData1 = {
            headerRow: [ 'School Name', 'Major', 'Program type', 'Status', 'Honors' ,'Start year', 'End year', '' ],
            dataRows: [
                ['San Jose State University', 'SE', 'Masters', 'Completed', 'Science', '2015','2017'],
                ['Osmania University', 'CSE', 'Bachelors', 'Completed', 'Science', '2011','2015']
            ]
         };
  }

}
