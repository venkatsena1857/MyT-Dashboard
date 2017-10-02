import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {


  public tableData1: {};

  ngOnInit() {
  	this.tableData1 = {
            headerRow: [ 'School Name', 'Major', 'Program type', 'Status', 'Honors' ,'Start year', 'End year', '' ],
            dataRows: [
                ['San Jose State University', 'SE', 'Masters', 'Completed', 'Science', '2015','2017'],
                ['Osmania University', 'CSE', 'Bachelors', 'Completed', 'Science', '2011','2015']
            ]
         };
  }

}
