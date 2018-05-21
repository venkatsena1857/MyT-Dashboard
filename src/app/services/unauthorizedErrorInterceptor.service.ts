import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UnAuthorizedInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): 
    Observable<HttpEvent<any>> {
        return next.handle(request).do(event => {}, err =>{
            if( err instanceof HttpErrorResponse && err.status ==  403) {
                this.router.navigate(['/'])
            }
        });
    }
}