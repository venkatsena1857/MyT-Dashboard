import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
    private readonly tokenKey = "my-t-me";
    isLoggedIn(): boolean{
        var token = this.getToken();
        console.log(token);
        if(token) {
            return tokenNotExpired(this.tokenKey);
        } else {
            return false;
        }
    }

    getToken(): string{
        return localStorage.getItem(this.tokenKey);
    }

    saveToken(token: string): void{
        console.log("Save Token is Called")
        localStorage.setItem(this.tokenKey,token); 
    }

    logOut(): void{
        localStorage.removeItem(this.tokenKey);
    }
}