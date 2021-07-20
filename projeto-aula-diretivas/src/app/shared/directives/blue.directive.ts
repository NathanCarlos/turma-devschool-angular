import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.color = 'blue';
  }

}
