// tslint:disable-next-line:indent
import { Component, OnInit, DoCheck,ViewChild } from '@angular/core';
import { FormDataService } from '../services/formData.service';
import { APIServices } from '../services/apiService.service';
import { ApiStrings } from '../common/apiStrings';
import { Response } from '@angular/http';

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

	op_resps = [ {'title' : 'a. Select location(s): Where people/systems for this do business - Physically and online','radio_name':'or_location_radio'},
				 {'title': 'b. Select equipment: the tools needed to get the job done','radio_name':'or_equipment_radio'},
				 {'title': 'c. Select equipment: the tools needed to get the job done','radio_name':'or_resources_radio'},
				 {'title': 'd. Determine processes: assignments, deadlines,procedures as needed, including systems for quality control and improvement','radio_name':'or_improvement_radio'}]

	critical_things = [ {'title' :'a. Required me to form goals based on reason and evidence', 'radio_name':'ct_evidence_radio'},
						{'title' :'b. Required me to form a systematic approach to solve problems', 'radio_name':'ct_problems_radio'},
						{'title' :'c. Required me to be inquisitive', 'radio_name':'ct_inquisitive_radio'},
						{'title' :'d. Required me to prioritize my efforts and deal with problems in an orderly manner', 'radio_name':'ct_orderly_radio'},
						{'title' :'e. Reinforced my confidence in my own reasoning capabilities.',  'radio_name':'ct_capabilities_radio'},]

  	innovation_arr =  [ {'title' :'a. Evaluate applications and solutions', 'radio_name':'ia_evaluate_radio'},
						{'title' :'b. Select applications and solutions', 'radio_name':'ia_select-app_radio'},
						{'title' :'c. Specify/ design applications and solutions', 'radio_name':'ia_specify_app_radio'},
						{'title' :'d. Build/test/install applications and solutions', 'radio_name':'ia_build_app_radio'},
						{'title' :'e. Assess benefit/cost/value of applications/solutions',  'radio_name':'ia_assess_app_radio'}]

  constructor(private formDataService: FormDataService, private api: APIServices) { }

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

  addWorkRecord(){
    document.getElementById('addWorkRecords').style.display = "block";
  }

  submit_work_details() {
	  var workForm = this.work_ex_form2;
	  var workValues: any = [
		{
			JSONName: 'employerSectionOfFocus',
			formName: ''
		},
		{
			JSONName: 'employerOrganizationName',
			formName: ''
		},
		{
			JSONName: 'locationRegion',
			formName: ''
		},
		{
			JSONName: 'startYear',
			formName: ''
		},
		{
			JSONName: 'endYear',
			formName: ''
		},
		{
			JSONName: 'startMonth',
			formName: ''
		},
		{
			JSONName: 'endMonth',
			formName: ''
		},
		{
			JSONName: 'positionDescription',
			formName: ''
		},
		{
			JSONName: 'role',
			formName: ''
		},
		{
			JSONName: 'primaryFunction',
			formName: ''
		},
		{
			JSONName: 'teamSize',
			formName: ''
		},
		{
			JSONName: 'multiDisciplinaryMakeup',
			formName: ''
		},
		{
			JSONName: 'multiCulturalMakeup',
			formName: ''
		}
	  ];
	  this.formDataService.getData(workForm,workValues, (builtJSON: any) => {
			//Getting OR Values
			var orValues: any = [
				{
					JSONName: 'OR_selectLocations',
					formName: 'or_location_radio'
				},
				{
					JSONName: 'OR_selectEquipment',
					formName: 'or_equipment_radio'
				},
				{
					JSONName: 'OR_selectManagingLabor',
					formName: 'or_resources_radio'
				},
				{
					JSONName: 'OR_determineProcessing',
					formName: 'or_improvement_radio'
				}
			];
			this.formDataService.getData(workForm, orValues, (orJSON: any) => {
				builtJSON['operationsResponsibilities'] = orJSON;
			});
			//Getting CT Values
			var ctValues: any = [
				{
					JSONName: 'CT_requiredMetoFormGoals',
					formName: 'ct_evidence_radio'
				},
				{
					JSONName: 'CT_requiredSystematicApproach',
					formName: 'ct_problems_radio'
				},
				{
					JSONName: 'CT_requiredInquisitive',
					formName: 'ct_inquisitive_radio'
				},
				{
					JSONName: 'CT_requiredPrioritize',
					formName: 'ct_orderly_radio'
				},
				{
					JSONName: 'CT_requiredConfidence',
					formName: 'ct_capabilities_radio'
				}
			];
			this.formDataService.getData(workForm, ctValues, (ctJSON: any) => {
				builtJSON['criticalThinking'] = ctJSON;
			});
			//Getting SOI Values
			var SOIValues: any = [
				{
					JSONName: 'SOI_evaluateApplications',
					formName: 'ia_evaluate_radio'
				},
				{
					JSONName: 'SOI_selectApplicationsAndSolutions',
					formName: 'ia_select-app_radio'
				},
				{
					JSONName: 'SOI_specificApplicationsAndSolutions',
					formName: 'ia_specify_app_radio'
				},
				{
					JSONName: 'SOI_buildApplicationsAndSolutions',
					formName: 'ia_build_app_radio'
				},
				{
					JSONName: 'SOI_accessBenifitCostValueSolutions',
					formName: 'ia_assess_app_radio'
				}
			];
			this.formDataService.getData(workForm, SOIValues, (soiJSON: any) => {
				builtJSON['systemAndOperationInnovation'] = soiJSON;
			});
			this.api.post(ApiStrings.WORK_EXPERIENCE,builtJSON, (response: Response)=>{
			});
	  });
  }

}
