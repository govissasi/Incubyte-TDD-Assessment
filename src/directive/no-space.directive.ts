import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNoSpace]',
  standalone: true
})
export class NoSpaceDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }

}
