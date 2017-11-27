  import { Component, OnInit, AfterViewInit,DoCheck } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';
import {HttpClient} from '@angular/common/http';
//import {TestParetoComponent} from './testpareto'
//for pareto 


import * as Chartist from 'chartist';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls :  ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit,DoCheck {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  constructor(private http: HttpClient){
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
     // console.log("animation started for");
     // console.log(this.SerisArr);
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

      //for get request
      this.http.get('http://mytzone.herokuapp.com/scores').subscribe(data => {
      // Read the result field from the JSON response.
      //data is variable that holds JSON
       console.log(data);
       this.MyTStem = data['My_T_Stem'];
       this.MyTTop =  data['My_T_Top'];
      // console.log(this.MyTStem['Education, Briefings, and Teaching']);
       this.My_T_Stem_SerisArr = [[this.MyTStem['Education, Briefings, and Teaching'],
                         this.MyTStem['Memberships, Authorships, and Recognitions'],
                         this.MyTStem['Methods/Skills Proficiency'],
                         this.MyTStem['Operations responsibilities and expertise'],
                         this.MyTStem['Software/Device Proficiency']]];

       for( let eachIt of this.My_T_Stem_SerisArr[0]){
           this.max_T_Stem = Math.max(this.max_T_Stem,eachIt);
           this.Total_T_Stem += eachIt;
       }
      // console.log(this.SerisArr);
      this.My_T_Top_SerisArr = [[this.MyTTop['Communications'],
                                 this.MyTTop['Critical Thinking'],
                                 this.MyTTop['Empathy'],
                                 this.MyTTop['Global understandng'],
                                 this.MyTTop['Networking'],
                                 this.MyTTop['Organizational design'],
                                 this.MyTTop['Perspective'],
                                 this.MyTTop['Project management'],
                                  ]]
         for( let eachIt of this.My_T_Top_SerisArr[0]){
           this.max_T_Stem = Math.max(this.max_T_Stem,eachIt);
           this.Total_T_Top += eachIt;
       }
       this.finalTScore = this.Total_T_Stem+this.Total_T_Top;
    });

      this.graph_flag = true;


      this.optionsWebsiteViewsChart = {
          axisX: {
              showGrid: true
          },
          low: 0,
          high: 60,
          chartPadding: { top: 0, right: 10, bottom: 20, left: 10}
      };
      this.responsiveOptions= [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
          labelInterpolationFnc: function (value) {
          return value[0]+value[1];
      }
    }
        }]
      ];

      
   }


  ngDoCheck() {  
      if(this.graph_flag && this.stopcheck < 100){
       this.dataWebsiteViewsChart = {
          labels: this.My_T_Top_LabelArr,
          series: this.My_T_Top_SerisArr
        };


        this.dataWebsiteViewsChart2 = {
          labels: this.My_T_Stem_LabelArr,
          series: this.My_T_Stem_SerisArr
        };

      // console.log(this.dataWebsiteViewsChart);  

      this.websiteViewsChart = new Chartist.Bar('#websiteViewsChart', this.dataWebsiteViewsChart, this.optionsWebsiteViewsChart, this.responsiveOptions);
      this.websiteViewsChart2 = new Chartist.Bar('#websiteViewsChart2', this.dataWebsiteViewsChart2, this.optionsWebsiteViewsChart, this.responsiveOptions);

      this.startAnimationForBarChart(this.websiteViewsChart);
      this.startAnimationForBarChart(this.websiteViewsChart2);
      this.stopcheck++;
      }
  }
  ngAfterViewInit() {
       const breakCards = true;
       if (breakCards === true) {
       }
       //  Activate the tooltips
       $('[rel="tooltip"]').tooltip();
   }
}