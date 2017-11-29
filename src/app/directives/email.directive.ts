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

    constructor( private eleRef: ElementRef){
        this.myTElement = eleRef.nativeElement;
    }

    validate(){
        var inputValue = this.myTElement.value;
        
    }
}