import { Component, OnInit,ViewChild } from '@angular/core';
import {EducationInterface} from '../interfaces/education.interface';
import { error } from 'util';


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
  educationToPost : EducationInterface;  

  type_of_degree_program: string[] = ["High School diploma",
                        "BS",
                        "BA",
                        "MS",
                        "MA",
                        "Ph.D",
                        "MBA",
                        "MD",
                        "LLD"];
  degree_program_status: string []  = ["In progress",
                        "Degree Awarded",
                        "Degree - Add'l field of Study"];
  honors: string[] = ["Valedictorian",
                        "Cum Laude",
                        "Magna Cum Laude",
                        "Summa Cum Laude",
                        "None"];
  StartdateArr : string[] = ['2023'];
  enddateArr : string[] = ['2023'];

  
  public tableData1: {};
  constructor(){

  }
  ngOnInit() {
    this.educationData = {
      header:[ 'School Name', 'Major', 'Program type', 'Status', 'Honors', 'Yr Completed/Expected', '' ],
      dataRows: [
        ['San Jose State University', 'Software Engineering', 'MS', 'Completed', 'Cum Laude', '2017'],
        ['Osmania University', 'CSE', 'BS', 'Completed', 'Cum Laude', '2015']
    ]
    }
    this.tableData1 = {
            headerRow: [ 'School Name', 'Major', 'Program type', 'Status', 'Honors' ,'Start year', 'End year', '' ],
            dataRows: [
                ['San Jose State University', 'SE', 'Masters', 'Completed', 'Science', '2015','2017'],
                ['Osmania University', 'CSE', 'Bachelors', 'Completed', 'Science', '2011','2015']
            ]
         };

    for(let i = 2022 ; i > 1949 ; i--){
        this.StartdateArr.push(i.toString());
    }
    for(let i = 2022 ; i > 1949 ; i--){
        this.enddateArr.push(i.toString());
    }
  }

  @ViewChild('EducationForm') Educationform : any;

  submit_Education_Details(){
    /*
    this.educationToPost = {
      schoolUniversityName : this.Educationform.controls.SchoolName.value,
      majorFiedOfStudy : this.Educationform.controls.Major.value,
      typeOfDegree : this.Educationform.controls.degree_program_type.value,
      status : this.Educationform.controls.degree_program_status.value,
      horors : this.Educationform.controls.honors.value,
      start_year : this.Educationform.controls.start_year.value,
      end_year : this.Educationform.controls.end_year.value
    }
    
    console.log(this.Educationform)
    //this.postservice.postToServer(this.educationToPost);
    let postObs = this.post.postService('education',JSON.stringify(this.educationToPost),this.Educationform);
    console.log(postObs.subscribe(data=>{
      this.educationData.dataRows.push([this.educationToPost.schoolUniversityName, this.educationToPost.majorFiedOfStudy,
        this.educationToPost.typeOfDegree, this.educationToPost.status,
        this.educationToPost.horors, this.educationToPost.start_year,
        this.educationToPost.end_year]);
    },error => console.log("am error")));
    */
    
  }
  
   addEducationRecord(){
    document.getElementById('addEduRecord').style.display = "block";
  }

}



