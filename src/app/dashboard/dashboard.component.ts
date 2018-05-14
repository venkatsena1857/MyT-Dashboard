import { Component, OnInit, AfterViewInit,DoCheck } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';
import {HttpClient} from '@angular/common/http';
import { APIServices } from '../services/apiService.service';

//import {TestParetoComponent} from './testpareto'
//for pareto 

import * as Chartist from 'chartist';
import { ApiStrings } from '../common/apiStrings';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls :  ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  constructor(private http: HttpClient, private api: APIServices){
    this.options = {
            chart:{
              backgroundColor : '#000000'
            },
            title : { text : 'Sample Patero' },
            series: [{
                data: [100,3,72,38],
                 type: 'column'
            },{
              data: [38, 72, 91, 100],
              type: 'spline'
            }
            ]
        };
  };
  public tableData: TableData;  
  My_T_Stem_SerisArr = [[0,0,0,0,0,0,0,0,0,0]];
  My_T_Top_SerisArr = [[0,0,0,0,0,0,0,0,0,0]];
  public MyTStem : Object;
  public MyTTop : Object;
  
  My_T_Stem_LabelArr : any = ['Education, Briefings, and Teaching','Memberships, Authorships, and Recognitions',
  'Methods/Skills Proficiency','Operations responsibilities and expertise','Software/Device Proficiency'];

  My_T_Top_LabelArr : any = ['Communications', 'Critical Thinking', 'Empathy', 'Global understandng', 'Networking',
   'Organizational design', 'Perspective', 'Project management']
  
  finalTScore = 0;
  max_T_Stem : number = 0;
  results: string[];
  options: Object;
  graph_flag = false;
  websiteViewsChart : any = null;
  websiteViewsChart2 : any = null;
  optionsWebsiteViewsChart : Object;
  responsiveOptions :any;
  dataWebsiteViewsChart : any;
  dataWebsiteViewsChart2 : any;
  stopcheck = 0;
  Total_T_Top = 0;
  Total_T_Stem = 0;
  
  startAnimationForBarChart(chart: any) {
      let seq2: any, delays2: any, durations2: any;
      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data: any) {
        if (data.type === 'bar') {
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
            data.element.attr({
              style: 'stroke-width: 30px'
            });
        }
      });

      seq2 = 0;
  }
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {

  this.api.get(ApiStrings.SCORES, (responseJSON: JSON) =>{
      console.log(responseJSON);
  })

  this.responsiveOptions= [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {

        }
      }]
    ];
  }
}