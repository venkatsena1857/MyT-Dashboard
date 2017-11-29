import { Directive, Renderer2, ElementRef} from '@angular/core';
import { ValidatorService } from '../services/validator.service';
import { ControlValueAccessor } from '@angular/forms';
import { } from '@angular/forms';

@Directive({
    selector: '[appDirectiveMandatory]',
    host: {
        '(focus)': 'registerOnChange()',
        '(blur)': 'registerOnTouched()',    
    }
})

/*
({selector: '', host: {
    '(focus)': 'setInputFocus(true)',
    '(blur)': 'setInputFocus(false)',
  }})
*/
export class MyTMandatoryDirective implements ControlValueAccessor {
    myElement: Node;
    myValidatorService: ValidatorService;


    constructor(private eleRef: ElementRef, private renderer: Renderer2){
        console.log("Constructor Loaded");
        this.myValidatorService = new ValidatorService();
        //this.myElement = eleRef.nativeElement;
        this.myValidatorService.isTest();
    }
    writeValue(obj: any): void {
        console.log('Don\'t know when this runs');
    }
    registerOnChange(fn: (_: any) => void): void {
        //this._onChange = fn;
        console.log('Change occured');
       // console.log('fn')
    }
    registerOnTouched(fn: any): void {
        //this._onTouched = fn;

        console.log(this.eleRef.nativeElement.value);
      //  console.log(fn);
    }
}