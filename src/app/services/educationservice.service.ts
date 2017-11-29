import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetService {

  constructor(private http: Http) { }

  getUser() {
    return this.http.get(`http://mytzone.herokuapp.com/scores`)
    .map((res:Response) => res.json());
  }



}