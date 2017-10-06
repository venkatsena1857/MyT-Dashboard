import { Component, OnInit,ElementRef } from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
   
    //router: Router;

    constructor(private element: ElementRef,private router:Router ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    gotoDash(fname: string, email : string, password :string){
    	if(fname == 'Revanth' && email == 'revanth@gmail.com' && password == 'Tscore'){
    		this.router.navigateByUrl('/dashboard');
    	}
    	else{
    		alert('You have entered Wrong values');
    	}
    }

}
