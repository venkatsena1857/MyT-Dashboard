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

  constructor() { }

  ngOnInit() {
  }

}
