import {Directive, ElementRef, Renderer2} from '@angular/core';
import { ValidatorService } from '../services/validator.service';

@Directive({
    selector: '[appDirectiveAlphabets]',
    host: {
        '(blur)': 'validate()',
        '(keypress)': 'validate()'
    } 
})

export class MyTAlphaDirective {
    private myElement: any;
    private myValidatorService: ValidatorService;
    regex = new RegExp('^[A-Za-z.]+$');

    constructor(private eleRef: ElementRef) {
        this.myElement = eleRef.nativeElement;
        console.log("const caled");
    }

    
    validate(){
        var inputValue = this.myElement.value;
        console.log("called")
        if(this.regex.test(inputValue)){
            console.log("is aplha");
        }
        else{
            console.log("is not alpha");
        }
    }
}