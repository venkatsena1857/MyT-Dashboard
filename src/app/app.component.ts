import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    Emp_focuses = [
    'Angriculture'];

    constructor(private elRef: ElementRef) {}
    ngOnInit() {
        $.material.options.autofill = true;
        $.material.init();
        const body = document.getElementsByTagName('body')[0];
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            body.classList.add('perfect-scrollbar-on');
        } else {
            body.classList.add('perfect-scrollbar-off');
        }
    }
}
