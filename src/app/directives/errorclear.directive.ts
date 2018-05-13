import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[appErrorClearer]'
})

export class ErrorClearDirective {
    private myElement: Node;
    constructor(private eleRef: ElementRef, private renderer: Renderer2) {
        console.log("Clearing Error Messages");
    }
}
