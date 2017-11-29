import { Directive, Renderer2, ElementRef} from '@angular/core';
import { ValidatorService } from '../services/validator.service';
import { ControlValueAccessor } from '@angular/forms';
import { } from '@angular/forms';

@Directive({
    selector: '[appDirectiveMandatory]',
    host: {
        '(blur)': 'validate()',
    } 
})

export class MyTMandatoryDirective{
    private myElement: any;
    private render: Renderer2;
    constructor(private eleRef: ElementRef, private renderer: Renderer2){
        this.myElement = eleRef.nativeElement;
    }
    validate() {
        var inputValue = this.myElement.value;
        if(inputValue == "" ){
            console.log("Empty");
        }
    }
}