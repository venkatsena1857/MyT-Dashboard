import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { PostServiceCallBack, GetServiceCallBack} from '../interfaces/apiCallBack.interfaces';
import { ApiStrings } from '../common/apiStrings';

@Injectable()
export class APIServices {
    constructor( private http: Http, public router: Router, public auth: AuthenticationService) {}

    public post(param:string, body: any, callBack?: PostServiceCallBack){
        let headers = new Headers;
        this.createAuthorizationHeader(headers);   
        this.http.post(this.linkCreator(param,'post'),body,{headers: headers}).subscribe((response: Response) => {
            if(callBack!=null) {
                callBack(response);
            }
        }, (err: Error) => {


        }, ()=> {

        });
        
    }

    public get(param: string, callBack: GetServiceCallBack) {
        let headers = new Headers;
        this.createAuthorizationHeader(headers);        
        this.http.get(this.linkCreator(param,'get'),{headers: headers}).subscribe((response: Response)=> {
            callBack(response.json());
        }, (err: Error) => {
            console.log(err);
        }, ()=> {

        });
    }

    private linkCreator(param: string, method: string): string {
        var diff = "/";
        //var defaultURL = "http://localhost:8080"
        var defaultURL = "https://mytzone.herokuapp.com";
        if(param===ApiStrings.LOGIN || param == ApiStrings.REGISTRATION) {
            return defaultURL + diff + param;
        } else if(method ==='post') {
            var test =  defaultURL + diff + ApiStrings.API +diff + ApiStrings.DEEDS + diff + param;
            console.log(test)
            return test
        } else {
            return defaultURL + diff + ApiStrings.API + diff + param;
        }
    }

    private createAuthorizationHeader(headers: Headers) {
        if(this.auth.isLoggedIn()) {
            headers.append('Authorization', 'Bearer ' + this.auth.getToken())
        }
    }
}