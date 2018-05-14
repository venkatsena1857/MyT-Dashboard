import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
  import { AuthenticationService } from '../services/authentication.service';
  import { Observable } from 'rxjs/Observable';

  @Injectable()
  export class MyTIntercptor implements HttpInterceptor {
      
    constructor(public auth: AuthenticationService){};

    intercept(request: HttpRequest<any>, next: HttpHandler): 
    Observable<HttpEvent<any>> {
        console.log("Interceptor Worked");
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.auth.getToken(),
            }
        });

        return next.handle(request);
    }
  }