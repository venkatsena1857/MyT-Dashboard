import { Directive, ElementRef, Renderer2} from '@angular/core';
import { ValidatorService } from '../services/validator.service';


@Directive({
    selector: '[appDirectiveEmail]'
})

export class MyTEmailDirective {
    private myElement: Node;
    private myValidatorService: ValidatorService;
    constructor(private eleRef: ElementRef, private renderer: Renderer2){
        console.log("Proper JSON type");
        console.log(eleRef);
        if(eleRef.hasOwnProperty('isWrong')){
            console.log("Yay");
        } else {
            console.log("Nay");
        }
        this.myElement = eleRef.nativeElement;
        this.myValidatorService = new ValidatorService();
        console.log(this.myElement);
    }
}
