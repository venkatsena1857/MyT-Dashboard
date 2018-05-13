import { Directive,ElementRef} from '@angular/core';


@Directive({
    selector: '[appDirectiveEmail]',
    host: {
        '(blur)': 'validate()',
        '(keypress)': 'validate()'
    }
})

export class MyTEmailDirective {
    private myTElement: any;
    regex = new RegExp('^[A-Za-z0-9.]+@[A-Za-z]+.com$');

    constructor( private eleRef: ElementRef){
        this.myTElement = eleRef.nativeElement;
    }

    validate(){
        var inputValue = this.myTElement.value;
        if(this.regex.test(inputValue)){
            console.log("is mail");
        }
        else{
            console.log("is not a mail");
        }
        
    }
}