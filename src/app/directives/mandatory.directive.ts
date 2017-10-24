import { Directive, Renderer2, ElementRef} from '@angular/core';
import { ValidatorService } from '../services/validator.service';

@Directive({
    selector: '[appDirectiveMandatory]'
})

export class MyTMandatoryDirective {
    myElement: Node;
    myValidatorService: ValidatorService;
    constructor(private eleRef: ElementRef, private renderer: Renderer2){
        this.myValidatorService = new ValidatorService();
        this.myElement = eleRef.nativeElement;
        console.log(this.myElement);
        this.myValidatorService.isTest();
    }
}