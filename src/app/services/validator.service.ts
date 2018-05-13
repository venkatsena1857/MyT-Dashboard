import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {
    isOnlyAlpha(value: string): boolean {
        return false;
    }

    isOnlyNumber(value: string): boolean {
        return false;
    }

    isEmail(value: string): boolean {
        return false;
    }

    isPresent(value: string): boolean {
        if (value.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    isTest(){
        console.log('This is Printed from the service');
    }
}