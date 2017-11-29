import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class GetService {

  constructor(private http: Http) { }

  getUser() : Observable<any> {
    return this.http.get(`http://mytzone.herokuapp.com/sscores`)
     .map((res:Response) => res.json()).catch(this.handleError);
  }

private handleError(error: Response | any) {
        let errorMessage: string;
 			
        errorMessage = error.message ? error.message : error.toString();
 		console.log(errorMessage)
        return Observable.throw(errorMessage);
    }

}