import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = 'red';
  }

}
