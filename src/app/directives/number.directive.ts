import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ValidatorService } from '../services/validator.service';


@Directive({
    selector: '[appDirectiveNumber]'
})

export class myTNumberDirective {
    private myElement: Node;
    private myValidatorService: ValidatorService;
    constructor(private eleRef: ElementRef, private renderer: Renderer2){
        this.myElement = eleRef.nativeElement;
        this.myValidatorService = new ValidatorService();
    }
}