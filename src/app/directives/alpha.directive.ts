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
    regex = new RegExp('^[A-Za-z. ]+$');
    private flag : boolean = false;
    
    constructor(private eleRef: ElementRef, private renderer : Renderer2) {
        this.myElement = eleRef.nativeElement;
        console.log("const caled");
    }

    
    validate(){
        var inputValue = this.myElement.value;
        var to_renderer =  this.myElement;
        const li = this.renderer.createElement('p');
        const text = this.renderer.createText('Enter a valid input');
        this.renderer.appendChild(li, text);
        console.log("called")
        if(this.regex.test(inputValue)){
            console.log("is aplha");
            var parent = this.renderer.parentNode(text);
            this.renderer.removeChild(parent, text);
            console.log(parent)
            this.renderer.addClass(parent, 'hidden');
            this.flag = true;
        }
        else if(this.flag == false){
            
            const parent = this.renderer.parentNode(to_renderer);
            console.log(parent)
            this.renderer.appendChild(parent, li);
            console.log("is not alpha");
            this.flag = true;
        }
    }
}