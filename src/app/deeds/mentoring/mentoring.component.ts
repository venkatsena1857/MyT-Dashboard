import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deeds-mentoring',
  templateUrl: './mentoring.component.html',
  styleUrls: ['./mentoring.component.css']
})
export class MentoringComponent implements OnInit {

  constructor() { 
    console.log("I called")
  }

  ngOnInit() {
    console.log("Initiated");
  }

}
