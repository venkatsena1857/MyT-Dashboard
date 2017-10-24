import { Directive, Renderer2, ElementRef} from '@angular/core';
import { ValidatorService } from '../services/validator.service';
import { ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: '[appDirectiveMandatory]'
})

export class MyTMandatoryDirective implements ControlValueAccessor {
    myElement: Node;
    myValidatorService: ValidatorService;

    public onChage:any = (value:any) => {
        alert("Changed");
    }

    public onTouched: any = (value: any) => {
        alert("Touched");
    }

    constructor(private eleRef: ElementRef, private renderer: Renderer2){
        this.myValidatorService = new ValidatorService();
        this.myElement = eleRef.nativeElement;
        console.log(this.myElement);
        this.myValidatorService.isTest();
    }
    registerOnChange(fn: any): void {
        this.onChage = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    writeValue(obj: any): void {
    }

}