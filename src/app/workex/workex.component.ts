// tslint:disable-next-line:indent
import { Component, OnInit, DoCheck,ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material';


//Declaring Models for the WorkExperience Page
declare interface workExperienceTableObject {
 customId: string;
 organization: string;
 startDate: string;
 endDate: string;
 positionActiivity: string;
 role: string;
 teamsize: number;
 paidUnpaid: string;
 questions: string;
};

declare interface workExperienceTableObject {

}

declare interface WorkExperienceDataTable {
 header: string[];
 dataRows: workExperienceTableObject[];
}

@Component({
  selector: 'app-workex',
  templateUrl: './workex.component.html',
  styleUrls : ['./workex.component.css']
})
export class WorkexComponent implements OnInit, DoCheck {
 public workExperienceDataTable: WorkExperienceDataTable;

 @ViewChild('workExForm') work_ex_form : any;
 @ViewChild('workExForm2') work_ex_form2 : any;

 isEmp_Valid = false;
 isEmp_touched = false;
 isPos_Valid = false;
 isPos_touched = false;
 fullValidator = true;

 regexp = new RegExp('^[A-Za-z0-9.]+@[A-Za-z]+.com$');

 initiated :boolean = false;
 counter = 0;
 ngDoCheck() {

    // Employ;
    if(this.work_ex_form2.controls.employee != null){
    	this.isEmp_touched = this.work_ex_form2.controls.employee.touched;
    	if(this.regexp.test(this.work_ex_form2.controls.employee.value)){
   			 this.isEmp_Valid = true;
   		}
   		if(!(this.regexp.test(this.work_ex_form2.controls.employee.value)) && this.isEmp_touched){
   			 this.isEmp_Valid = false;
   		}
     }

     //position
     if(this.work_ex_form2.controls.position != null){
    	this.isPos_touched = this.work_ex_form2.controls.position.touched;
    	if(this.regexp.test(this.work_ex_form2.controls.position.value)){
   			 this.isPos_Valid = true;
   		}
   		if(!(this.regexp.test(this.work_ex_form2.controls.position.value)) && this.isPos_touched){
   			 this.isPos_Valid = false;
   		}
     }

   }

 Emp_focuses = ['Angriculture',
				'Building and Construction',
				'Education',
				'Entertainment',
				'Energy and Electric',
				'Financial and Business consulting',
				'Fitness and Well being',
				'Government',
				'Healthcare Delivery',
				'Hospitality',
				'Information and Communication technology',
				'Manufacturing',
				'Religious',
				'Retail',
				'Social',
				'Trade/Professional',
				'Water and Utilities',
				'Other'];

	locations = ['North America',
				 'Carrabian',
				 'Central America',
				 'South America',
				 'Eastern Africa',
				 'Middle Africa',
				 'Western Africa',
				 'North Africa',
				 'Sub saharan Africa',
				 'Eastern Asia',
				 'Central Asia',
				 'South Eastern Asia'	
				 ];

	primaryFunctions = ['Bussiness Development',
				 'Consulting - External',
				 'Consulting - Internal',
				 'CSR Corporate Social Responsibility',
				 'Customer Service(Student/Patient/Client/Member)',
				 'Education',
				 'Engineering - Product/Services',
				 'Engineering - Software',
				 'Engineering - Structures',
				 'Finance and Accounting',
				 'Headquarters and Administration',
				 'Healthy/Saftey'	
				 ];

	roles = ['Board of Directors',
			'Consultant/Subject matter expert',
			'Employee',
			'Executive/Founder',
			'Local or student committee',
			'Local or student officer',
			'Manager',
			'Member(Student/Full membership)',
			'National Committee',
			'National Officer',
			'Team Leader'
			];

	teamsize = 1;
	Mul_dec = 1;

	op_resps = [ {'title' : 'a. Select location(s): Where people/systems for this do business - Physically and online','radio_name':'location-radio'},
				 {'title': 'b. Select equipment: the tools needed to get the job done','radio_name':'equipment-radio'},
				 {'title': 'c. Select equipment: the tools needed to get the job done','radio_name':'resources-radio'},
				 {'title': 'd. Determine processes: assignments, deadlines,procedures as needed, including systems for quality control and improvement','radio_name':'improvement-radio'}]

	critical_things = [ {'title' :'a. Required me to form goals based on reason and evidence', 'radio_name':'evidence-radio'},
						{'title' :'b. Required me to form a systematic approach to solve problems', 'radio_name':'problems-radio'},
						{'title' :'c. Required me to be inquisitive', 'radio_name':'inquisitive-radio'},
						{'title' :'d. Required me to prioritize my efforts and deal with problems in an orderly manner', 'radio_name':'orderly-radio'},
						{'title' :'e. Reinforced my confidence in my own reasoning capabilities.',  'radio_name':'capabilities-radio'},]

  	innovation_arr =  [ {'title' :'a. Evaluate applications and solutions', 'radio_name':'evaluate-radio'},
						{'title' :'b. Select applications and solutions', 'radio_name':'select-app-radio'},
						{'title' :'c. Specify/ design applications and solutions', 'radio_name':'specify-app-radio'},
						{'title' :'d. Build/test/install applications and solutions', 'radio_name':'build-app-radio'},
						{'title' :'e. Assess benefit/cost/value of applications/solutions',  'radio_name':'assess-app-radio'},]

  constructor() { }

  ngOnInit() {
	  this.workExperienceDataTable = {
		  header:["Sl. No","Organization", "Start Date","End Date"," Position/Activity", "Role", "Team Size","Paid/Volunteer","Questions","Actions"],
		  dataRows:[{customId: "1",
					organization: "My-T Me",
					startDate: "2011-12-23",
					endDate: "2017-12-23",
					positionActiivity: "Developer",
					role: "Engineer",
					teamsize: 10,
					paidUnpaid: "paid",
					questions: "no"}]
	  				}
	  this.initiated = true;
  }

  addEntry(){
 	if(this.work_ex_form2.controls.Location.value == ""
 		||this.work_ex_form2.controls.EmployeSector.value == ""
 		||this.work_ex_form2.controls.EndDate.value == ""
 		||this.work_ex_form2.controls.PrimaryFunction.value == ""
 		||this.work_ex_form2.controls.StartDate.value == ""
 		||this.work_ex_form2.controls.employee.value == ""
 		||this.work_ex_form2.controls.position.value == ""){
 		alert("Please fill all the fields");
 		this.fullValidator = false;
 		console.log(this.work_ex_form2.controls);

 		/*var toSend = {
                "operationsResponsibilities" :{ 
                    "OR_selectLocations": tem.q1,
                    "OR_selectEquipment": tem.q2,
                    "OR_selectManagingLabor": tem.q3,
                    "OR_determineProcessing": tem.q4,
                },
                "criticalThinking" : {
                    "CT_requiredMetoFormGoals": tem.q5,
                    "CT_requiredSystematicApproach": tem.q6,
                    "CT_requiredInquisitive": tem.q7,
                    "CT_requiredPrioritize": tem.q8,
                    "CT_requiredConfidence": tem.q9
                },
                "systemAndOperationInnovation":{
                    "SOI_evaluateApplications": tem.q10,
                    "SOI_selectApplicationsAndSolutions": tem.q11, 
                    "SOI_specificApplicationsAndSolutions": tem.q12,
                    "SOI_buildApplicationsAndSolutions": tem.q13,
                    "SOI_accessBenifitCostValueSolutions": tem.q14
                },
                "employerSectionOfFocus" : tem.esector,
                "employerOrganizationName" : tem.ename,
                "locationRegion" : tem.region,
                "startYear" : String(tem.syear),
                "endYear" : String(tem.eyear),
                "startMonth" : tem.smonth,
                "endMonth" : tem.emonth,
                "positionDescription" : tem.position,
                "primaryFunction" : tem.primary,
                "teamSize" : tem.team,
                "multiDisciplinaryMakeup" : tem.multidis,
                "multiCulturalMakeup" : tem.multicul,
                "paidUnpaid" : tem.paid,
                "role" : tem.role

            };*/

 	}
 	else{
 		document.getElementById('previousData').scrollIntoView();
 		console.log("got as well")
  	}
  }

  addWorkRecord(){
    document.getElementById('addWorkRecords').style.display = "block";
  }

}
