import { Component, OnInit } from '@angular/core';


declare interface EducationData{
  header:string [];
  dataRows: string[][];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls : ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public educationData: EducationData;

  type_of_degree_program: string[] = ['High Schoool Diploma',
                            'Certificate',
                            'BS',
                            'BA',
                            'MS',
                            'MA',
                            'PhD',
                            'MBA',
                            'MD',
                            'LLD'];
  degree_program_status: string []  = ['In Progress',
                                       'Degree awarded',
                                       'Degree - add\'l field of study'];
  honors: string[] = ['Valedictorian',
                      'Cum Laude',
                      'Magna Cum Laude',
                      'Summa Cum Laude'];
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
