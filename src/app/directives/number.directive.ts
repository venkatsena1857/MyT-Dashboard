import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ValidatorService } from '../services/validator.service';


@Directive({
    selector: '[appDirectiveNumber]',
    host: {
        '(blur)': 'validate()',
    } 
})

export class myTNumberDirective {
    private myElement: any;
    private myValidatorService: ValidatorService;
    regex = new RegExp('^[A-Za-z.]+$');
    
    constructor(private eleRef: ElementRef, private renderer: Renderer2){
        this.myElement = eleRef.nativeElement;
        this.myValidatorService = new ValidatorService();
    }

    
    validate(){
        var inputValue = this.myElement.value;
        if(this.regex.test(inputValue)){
            console.log("is number");
        }
        else{
            console.log("is not a number");
        }
        
    }
}