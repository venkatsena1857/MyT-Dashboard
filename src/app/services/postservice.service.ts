import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class PostService {
  private myTHTTP: Http;

  constructor(private http: Http) {
    this.myTHTTP = http;
  }
  postService(id: string, data: any, formData: any){
      let url = "http://mytzone.herokuapp.com/test";
      console.log("trying to post")
      console.log(url+id)
      return this.myTHTTP.post(url, JSON.stringify(data))
      .map((res:Response) => res.json())
      .catch(this.errorHandler);
  }

  private errorHandler(error: Response | any) {
    console.log("Error");
    return Observable.throw(error);
  }
}



