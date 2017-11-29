import { Component, OnInit,ViewChild } from '@angular/core';
import {EducationInterface} from '../interfaces/education.interface'
import {PostService} from '../services/postservice.service'
import { error } from 'util';


declare interface EducationData{
  header:string [];
  dataRows: string[][];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls : ['./education.component.css'],
  providers: [PostService]
})

export class EducationComponent implements OnInit {
  public educationData: EducationData;
  educationToPost : EducationInterface;
  

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
  StartdateArr : string[] = ['2017'];
  enddateArr : string[] = ['2017'];

  public tableData1: {};
  constructor(private post: PostService){

  }
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
    for(let i = 2016 ; i > 1949 ; i--){
        this.StartdateArr.push(i.toString());
    }
    for(let i = 2016 ; i > 1949 ; i--){
        this.enddateArr.push(i.toString());
    }
  }

  @ViewChild('EducationForm') Educationform : any;

  submit_Education_Details(){
    
    this.educationToPost = {
      School_Name : this.Educationform.controls.SchoolName.value,
      Major : this.Educationform.controls.Major.value,
      degree_type : this.Educationform.controls.degree_program_type.value,
      degree_status : this.Educationform.controls.degree_program_status.value,
      horors : this.Educationform.controls.honors.value,
      start_year : this.Educationform.controls.start_year.value,
      end_year : this.Educationform.controls.end_year.value
    }
    
    console.log(this.Educationform)
    //this.postservice.postToServer(this.educationToPost);
    let postObs = this.post.postService('education',JSON.stringify(this.educationToPost));
    console.log(postObs.subscribe(data=>{
      this.educationData.dataRows.push([this.educationToPost.School_Name, this.educationToPost.Major,
        this.educationToPost.degree_type, this.educationToPost.degree_status,
        this.educationToPost.horors, this.educationToPost.start_year,
        this.educationToPost.end_year]);
    },error => console.log("am error")));
  }

}



