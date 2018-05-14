import { Response } from '@angular/http';

export interface PostServiceCallBack {
    (response: Response) :void;
}

export interface GetServiceCallBack {
    (responseJSON: JSON) :void;
}