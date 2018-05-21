import { Component, OnInit,ElementRef,DoCheck,ViewChild } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {Router} from '@angular/router';
import { APIServices } from '../services/apiService.service';
import { Response} from '@angular/http';
import { ApiStrings } from '../common/apiStrings'

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,DoCheck {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    isRegistered = true;
    @ViewChild('RegForm') RegForm : any;
    //router: Router;

    constructor(private element: ElementRef,private router:Router, private api: APIServices, private auth: AuthenticationService) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
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
    gotoDash(email : string, password :string){
        var loginjson = {
            "userName" : email,
            "password": password
        }
        this.api.post(ApiStrings.LOGIN, loginjson, (response: Response)=>{
            if(response!=null) {
                var responseJSON = response.json();
                var token =responseJSON['token']; 
                if(token!=null){
                    this.auth.saveToken(token);
                    this.router.navigate(['/user/dashboard']);
                } 
            }
        });
    }

    goToRegister(){

        this.isRegistered = false;
        
    }
    //Registration page
    U_Name_valid = false;
    L_Name_valid = false;
    F_Name_valid = false;
    M_Name_valid = false;
    E_Mail_valid = false;
    Pwd_valid = false;
    U_Name_touched = false;
    L_Name_touched = false;
    F_Name_touched = false;
    E_Mail_touched = false;
    Pwd_touched = false;
    counter = 0;
    regexp = new RegExp('^[A-Za-z0-9_-]+$');
    email_regexp = new RegExp('^([A-Za-z0-9_.]+)@([A-Za-z]+).([A-Za-z]+)$');
    doRegister(){
        this.isRegistered = true;
    }

    ngDoCheck(){
         setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 1000); 

        //UserName
    if(this.RegForm != null && !this.isRegistered){
        this.U_Name_touched = this.RegForm.controls.u_name.touched 
        if(this.regexp.test(this.RegForm.controls.u_name.value)){
                this.U_Name_valid = true;
           }
        if(!(this.regexp.test(this.RegForm.controls.u_name.value)) && this.RegForm.controls.u_name.touched){
                 this.U_Name_valid = false;
           }
        //LastName
        this.L_Name_touched = this.RegForm.controls.l_name.touched 
        if(this.regexp.test(this.RegForm.controls.l_name.value)){
                this.L_Name_valid = true;
           }
        if(!(this.regexp.test(this.RegForm.controls.l_name.value)) && this.RegForm.controls.l_name.touched){
                 this.L_Name_valid = false;
           }
        //First Name   
        this.F_Name_touched = this.RegForm.controls.f_name.touched 
        if(this.regexp.test(this.RegForm.controls.f_name.value)){
                this.F_Name_valid = true;
           }
        if(!(this.regexp.test(this.RegForm.controls.f_name.value)) && this.RegForm.controls.f_name.touched){
                 this.F_Name_valid = false;
           }
        //EMail
        this.E_Mail_touched = this.RegForm.controls.e_mail.touched 
        if(this.RegForm.controls.e_mail._status== "VALID"){
                this.E_Mail_valid = true;
           }
         //  console.log(this.RegForm.controls.e_mail);
        if(!(this.RegForm.controls.e_mail._status == "VALID") && this.RegForm.controls.e_mail.touched){
                 this.E_Mail_valid = false;
           }
        //password valid
        this.Pwd_touched = this.RegForm.controls.conf_pwd.touched 
        if((this.RegForm.controls.pwd.value== this.RegForm.controls.conf_pwd.value) && (this.RegForm.controls.pwd.touched)){
                this.Pwd_valid = true;
           }
          // console.log(this.RegForm.controls.e_mail);
        if(!(this.RegForm.controls.pwd.value== this.RegForm.controls.conf_pwd.value) && this.RegForm.controls.conf_pwd.touched){
                 this.Pwd_valid = false;
           }
    }
     //    if(this.RegForm.controls.u_name != null){
     //        if(this.regexp.test(this.RegForm.controls.u_name.value)){
     //            this.U_Name_valid = true;
     //          //  console.log(this.RegForm.controls)
     //       }
     //       if(!(this.RegForm.test(this.RegForm.controls.u_name.value)) && this.RegForm.controls.u_name.value.touched){
     //            this.U_Name_valid = false;
     //       }
     // }

    }

}
