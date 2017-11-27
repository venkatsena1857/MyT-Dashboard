import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }    from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { ChartModule }            from 'angular2-highcharts'; 

@Component({
    selector: 'my-testpareto',
    styles: [`
      chart {
        display: block;
      }
    `],
    template: `<chart [options]="options"></chart>`
})
export class TestParetoComponent {
    constructor() { 
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [100,91,72,38],
                 type: 'column'
            },{
              data: [38, 72, 91, 100],
              type: 'spline'
            }
            ]
        };
    }
    options: Object;
}

// @NgModule({
//   imports:      [BrowserModule, ChartModule.forRoot(require('highcharts'))],
//   declarations: [AppComponent],
//   bootstrap:    [AppComponent]
// })
// class AppModule { }


// platformBrowserDynamic().bootstrapModule(AppModule);
