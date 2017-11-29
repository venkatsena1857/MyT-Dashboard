import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class PostService {
  private myTHTTP: Http;

  constructor(private http: Http) {
    this.myTHTTP = http;
  }
  postService(id: string,data: any){
      let url = "http://localhost:8080/api/v2/";
      return this.myTHTTP.post(url+id, JSON.stringify(data))
      .map((res:Response) => res.json())
      .catch(this.errorHandler);
  }

  private errorHandler(error: Response | any) {
    console.log("Error");
    return Observable.throw(error);
  }
}



