//
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  DoCheck
} from '@angular/core';
import {
  TableData
} from '../md/md-table/md-table.component';
import {
  LegendItem,
  ChartType
} from '../md/md-chart/md-chart.component';
import {
  HttpClient
} from '@angular/common/http';
import {
  APIServices
} from '../services/apiService.service';

//import {TestParetoComponent} from './testpareto'
//for pareto

import * as Chartist from 'chartist';

import Chart from 'chart.js';

import List from 'list.js'

import {
  ApiStrings
} from '../common/apiStrings';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  constructor(private http: HttpClient, private api: APIServices) {
    this.options = {
      chart: {
        backgroundColor: '#000000'
      },
      title: {
        text: 'Sample Patero'
      },
      series: [{
        data: [100, 3, 72, 38],
        type: 'column'
      }, {
        data: [38, 72, 91, 100],
        type: 'spline'
      }]
    };
  };
  public tableData: TableData;
  My_T_Stem_SerisArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  My_T_Top_SerisArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  public MyTStem: Object;
  public MyTTop: Object;

  My_T_Stem_LabelArr: any = ['Education, Briefings, and Teaching', 'Memberships, Authorships, and Recognitions',
    'Methods/Skills Proficiency', 'Operations responsibilities and expertise', 'Software/Device Proficiency'
  ];

  My_T_Top_LabelArr: any = ['Communications', 'Critical Thinking', 'Empathy', 'Global understandng', 'Networking',
    'Organizational design', 'Perspective', 'Project management'
  ]

  finalTScore = 0;
  max_T_Stem: number = 0;
  results: string[];
  options: Object;
  graph_flag = false;
  websiteViewsChart: any = null;
  websiteViewsChart2: any = null;
  optionsWebsiteViewsChart: Object;
  responsiveOptions: any;
  dataWebsiteViewsChart: any;
  dataWebsiteViewsChart2: any;
  stopcheck = 0;
  Total_T_Top = 120;
  Total_T_Stem = 0;

fulltStem:number;
educationScore:number;
membershipScore:number;
methodsScore:number;
operationalScore: number;
proficiencyScore: number;
fulltTop: number;

communicationScore: number;
criticalScore: number;
empathyScore: number;
globalUnderstandScore: number;
networkingScore: number;
designScore: number;
perspectiveScore: number;
managementScore: number;
teamworkScore: number;
fulltScore: number;

communicationScorePerc: number = 0;
   criticalScorePerc: number = 0;
   empathyScorePerc: number = 0;
   globalUnderstandScorePerc: number = 0;
   networkingScorePerc: number = 0;
   designScorePerc: number = 0;
   perspectiveScorePerc: number = 0;
   managementScorePerc: number = 0;
   teamworkScorePerc: number = 0;

   educationScorePerc: number = 0;
   membershipScorePerc: number = 0;
   operationalScorePerc: number = 0;
   methodsScorePerc: number = 0;
   proficiencyScorePerc: number = 0;

   tTopUpper: number = 0;
   tStemUpper: number = 0;

   chartWidth: number = 0;

  startAnimationForBarChart(chart: any) {
    let seq2: any, delays2: any, durations2: any;
    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data: any) {
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

  // drawTChart(){

  // }
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {

    this.api.get(ApiStrings.SCORES, (responseJSON: JSON) => {
      console.log(responseJSON);
      // var data = JSON.parse(responseJSONJSON);
      // // console.log(data.)


      this.fulltStem = 0
      this.educationScore = responseJSON["My_T_Stem"]["Education, Briefings, and Teaching"];
      this.fulltStem = this.fulltStem + this.educationScore
      this.membershipScore = responseJSON["My_T_Stem"]["Memberships, Authorships, and Recognitions"];
      this.fulltStem += this.membershipScore
      this.methodsScore = responseJSON["My_T_Stem"]["Methods/Skills Proficiency"];
      this.fulltStem +=  this.methodsScore;
      this.operationalScore = responseJSON["My_T_Stem"]["Operations responsibilities and expertise"];
      this.fulltStem += this.operationalScore
      //  proficiencyScoreBefore = proficiencyScore;
      this.proficiencyScore = responseJSON["My_T_Stem"]["Software/Device Proficiency"];
      this.fulltStem += this.proficiencyScore
      //T-top
      this.fulltTop = 0;
      this.communicationScore = responseJSON["My_T_Top"]["Communications"];
      this.fulltTop = this.fulltTop + this.communicationScore;
      this.criticalScore = responseJSON["My_T_Top"]["Critical Thinking"];
      this.fulltTop = this.fulltTop + this.criticalScore;
      this.empathyScore = responseJSON["My_T_Top"]["Empathy"];
      this.fulltTop = this.fulltTop + this.empathyScore;
      this.globalUnderstandScore = responseJSON["My_T_Top"]["Global understandng"];
      this.fulltTop = this.fulltTop + this.globalUnderstandScore;
      this.networkingScore = responseJSON["My_T_Top"]["Networking"];
      this.fulltTop = this.fulltTop + this.networkingScore;
      this.designScore = responseJSON["My_T_Top"]["Organizational design"];
      this.fulltTop = this.fulltTop + this.designScore;
      this.perspectiveScore = responseJSON["My_T_Top"]["Perspective"];
      this.fulltTop = this.fulltTop + this.perspectiveScore;
      this.managementScore = responseJSON["My_T_Top"]["Project management"];
      this.fulltTop = this.fulltTop + this.managementScore;
      this.teamworkScore = responseJSON["My_T_Top"]["Teamwork"];
      this.fulltTop = this.fulltTop + this.teamworkScore;
      this.fulltScore = this.fulltTop + this.fulltStem;

   this.communicationScorePerc = roundMe((this.communicationScore / this.fulltTop) * 100);
   this.criticalScorePerc = roundMe((this.criticalScore / this.fulltTop) * 100);
   this.empathyScorePerc = roundMe((this.empathyScore / this.fulltTop) * 100);
   this.globalUnderstandScorePerc = roundMe((this.globalUnderstandScore / this.fulltTop) * 100);
   this.networkingScorePerc = roundMe((this.networkingScore / this.fulltTop) * 100);
   this.designScorePerc = roundMe((this.designScore / this.fulltTop) * 100);
   this.perspectiveScorePerc = roundMe((this.perspectiveScore / this.fulltTop) * 100);
   this.managementScorePerc = roundMe((this.managementScore / this.fulltTop) * 100);
   this.teamworkScorePerc = roundMe((this.teamworkScore / this.fulltTop) * 100);

   this.educationScorePerc = roundMe((this.educationScore / this.fulltStem) * 100);
   this.membershipScorePerc = roundMe((this.membershipScore / this.fulltStem) * 100);
   this.operationalScorePerc = roundMe((this.operationalScore / this.fulltStem) * 100);
   this.methodsScorePerc = roundMe((this.methodsScore / this.fulltStem) * 100);
   this.proficiencyScorePerc = roundMe((this.proficiencyScore / this.fulltStem) * 100);
  console.log(this.membershipScore)
  console.log(this.proficiencyScorePerc)

  console.log("T Top Skills");
  console.log(this.communicationScorePerc, this.networkingScorePerc, this.criticalScorePerc, this.empathyScorePerc, this.globalUnderstandScorePerc, this.designScorePerc, this.perspectiveScorePerc, this.managementScorePerc, this.teamworkScorePerc);
  console.log("T Stem Skills")
  console.log(this.educationScorePerc, this.membershipScorePerc, this.methodsScorePerc, this.operationalScorePerc, this.proficiencyScorePerc);

  //Calculate Upper Bounds for raw score charts
   this.tTopUpper = Math.ceil(this.fulltTop / 1000) * 1000;
   this.tStemUpper = Math.ceil(this.fulltStem / 1000) * 1000;
console.log("tTopUpper24")
console.log(this.tTopUpper)
  function roundMe(value, decimals = 1) {
      //  return Number(Math.round(value * 10 ** decimals) * 10 ** -decimals);
      //return Number(Math.round(value*Math.exp(decimals)) *Math.exp(-decimals));

      return Number(Math.round(value * 10 ** decimals) * 10 ** -decimals);


    }
    let data2 = {
      labels: ['Mon'],
           series: [
             [this.communicationScorePerc],
             [this.criticalScorePerc],
             [this.empathyScorePerc],
             [this.globalUnderstandScorePerc],
             [this.networkingScorePerc],
             [this.designScorePerc],
             [this.perspectiveScorePerc],
             [this.managementScorePerc],
             [this.teamworkScorePerc]
           ]
         }

         let data3 = {
           labels: ['Mon'],
           series: [
             [this.fulltTop],
           ]
              }
       let data4 = {
         labels: ['Mon'],
         series: [
               [this.educationScorePerc],
               [this.membershipScorePerc],
               [this.methodsScorePerc],
               [this.operationalScorePerc],
               [this.proficiencyScorePerc],
             ]
              }
              let data5 = {
               labels: ['Mon'],
               series: [
                 [this.fulltStem],
               ]
                  }
        let options = {
               stackBars: true,
               height: 70,
               high: 100,
               horizontalBars: true,
             //   fullWidth: true,
               chartPadding: { 
                left: 0,
             //   top: 0,
             //   bottom: 0,
             // right: 0
            },

                 axisX: {
                 showLabel: false,
                 showGrid: false,
                 offset: 0,

               },
               axisY: {
                 showLabel: false,
                 showGrid: false,
                 offset: 0,

               },
                plugins: [
    // Chartist.plugins.tooltip()
  ],
             }
       var tTopTicks = [this.tTopUpper - 1000, this.tTopUpper];
       console.log("Bounds")
     console.log(this.tTopUpper)
     console.log(this.tTopUpper - 1000)

       let options2 = {
         horizontalBars: true,
         height: 100,
         high: this.tTopUpper,
         low: this.tTopUpper - 1000,
         // fullWidth: true,
         chartPadding: { 
          left: 0,
      //     top: 0,
      //     bottom: 0,
          right: 50,
      },

         axisX: {
           
           type: Chartist.FixedScaleAxis,
           ticks: tTopTicks,
           showLabel: true,
           showGrid: false,
           position: 'start',
           // offset: 0,

           labelOffset: {
             x: 5,
             y: 20
           },
         },
         axisY: {
           showGrid: false,
           showLabel: false,
           offset: 0,
         }
       }

       new Chartist.Bar('#tTopBreak', data2, options);
       //Generate Charts
       var tTopTicks = [this.tTopUpper - 1000, this.tTopUpper];
       new Chartist.Bar('#tTopQuant', data3, options2);

       


      var elmnt = document.getElementById('tTopBreak');

      // var elmnt2 = <HTMLElement>document.querySelector("g.ct-grids");

      var txt = "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
      txt += "Width with padding and border: " + elmnt.offsetWidth + "px";

      // var txt2 = "Height with padding and border: " + elmnt2.offsetHeight + "px<br>";
      // txt2 += "Width with padding and border: " + elmnt2.offsetWidth + "px";
      var chartHeight = elmnt.offsetWidth - 50;
      this.chartWidth = elmnt.offsetWidth;
      console.log("ChartWidth")
      console.log(this.chartWidth);
      // console.log(txt2)

      var topLegend = document.getElementById("topLegend");
topLegend.setAttribute("style", `width: ${this.chartWidth}px`);

// var botLeg = document.getElementById('tBotLegend');
//       var width = botLeg.offsetWidth - 50;

      let options3 = {
       stackBars: true,
       high: 100,
       height: chartHeight,
       fullWidth: true,
       chartPadding: { 
         left: 0,
         top: 10,
         bottom: 0,
         right: 0
    },
       axisY: {
         showGrid: false,
         showLabel: false,
        //  offset: 0,

       },
       axisX: {
         showLabel: false,
         showGrid: false,
        //  offset: 0,
       }
     }
     var tStemTicks = [this.tStemUpper - 1000, this.tStemUpper];
     let options4 = {
       height: chartHeight,
       high: this.tStemUpper,
       low: this.tStemUpper-1000,
       fullWidth: true,
       chartPadding: { 
        left: 20,
       top: 10,
       bottom: 0,
     right: 0
    },
       axisX: {
       showLabel: false,
       showGrid: false,
         },
         axisY: {
           type: Chartist.FixedScaleAxis,
           position: 'start',
           showGrid: false,
           ticks: tStemTicks,
          //  offset: 0,
          labelOffset: {
            x: 0,
            y: 20,
          },
         },
     }
       new Chartist.Bar('#tStemBreak', data4, options3);
       new Chartist.Bar('#tStemQuant', data5, options4);



let topData = {
 labels: ['Communications', 'Critical Thinking', 'Empathy', 'Global Understanding','Networking','Organizational Design','Perspective','Project Management','Teamwork'],
    datasets: [{
            label: "Top Score",
            backgroundColor: "#00bcd4",
           borderColor: "#00bcd4",
        data: [this.communicationScore,this.criticalScore,this.empathyScore,this.globalUnderstandScore,this.networkingScore, this.designScore,this.perspectiveScore,this.managementScore, this.teamworkScore]
    }]
}
let stemData = {
 labels: ['Education', 'Memberships', 'Skills', 'Operations','Software'],
    datasets: [{
label: "Stem Score",
           backgroundColor: "#f44336",
           borderColor: "#f44336",
        data: [this.educationScore, this.membershipScore, this.operationalScore, this.proficiencyScore]
    }]
} 

let topOptions = {
label: "Top Score"
}

let stemOptions = {
label: "Stem Score"

}

     var tTopSource = document.getElementById("tTopRadar");
    var tTopChart = new Chart(tTopSource, {
    type: 'radar',
    data: topData,
    options: topOptions
});

      var tStemSource = document.getElementById("tStemRadar");
    var tStemChart = new Chart(tStemSource, {
    type: 'radar',
    data: stemData,
    options: stemOptions
});

    })
    this.responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {

        }
      }]
    ];
  }
  }
