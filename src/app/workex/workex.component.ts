import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-workex',
  templateUrl: './workex.component.html',
  styleUrls : ['./workex.component.css']
})
export class WorkexComponent implements OnInit {

	Emp_focuses = ['Angriculture',
					'Building and Construction',
					'Education','Entertainment',
					'Energy and Electric',
					'financial and Business consulting',
					'fitness and well being',
					'Government',
					'Healthcare Delivery',
					'Hospitality',
					'Information and Communication technology',
					'Manufacturing'];

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
				 ]

	teamsize = 1;
	Mul_dec = 1;

	op_resps = [ {'title' : '1. Select location(s): Where people/systems for this do business - Physically and online','radio_name':'location-radio'},
				 {'title': '2. Select equipment: the tools needed to get the job done','radio_name':'equipment-radio'},
				 {'title': '3. Select equipment: the tools needed to get the job done','radio_name':'resources-radio'},
				 {'title': '4. Determine processes: assignments, deadlines,procedures as needed, including systems for quality control and improvement','radio_name':'improvement-radio'}]

	critical_things = [ {'title' :'1. Required me to form goals based on reason and evidence', 'radio_name':'evidence-radio'},
						{'title' :'2. Required me to form a systematic approach to solve problems', 'radio_name':'problems-radio'},
						{'title' :'3. Required me to be inquisitive', 'radio_name':'inquisitive-radio'},
						{'title' :'4. Required me to prioritize my efforts and deal with problems in an orderly manner', 'radio_name':'orderly-radio'},
						{'title' :'5. Reinforced my confidence in my own reasoning capabilities.',  'radio_name':'capabilities-radio'},]

  	innovation_arr =  [ {'title' :'1. Evaluate applications and solutions', 'radio_name':'evaluate-radio'},
						{'title' :'2. Select applications and solutions', 'radio_name':'select-app-radio'},
						{'title' :'3. Specify/ design applications and solutions', 'radio_name':'specify-app-radio'},
						{'title' :'4. Build/test/install applications and solutions', 'radio_name':'build-app-radio'},
						{'title' :'5. Assess benefit/cost/value of applications/solutions',  'radio_name':'assess-app-radio'},]

  constructor() { }

  ngOnInit() {
  }

}
