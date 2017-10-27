import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    isLoggedIn(): boolean{
        return false;
    }
}