import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input() appHighlightOnFocus = "magenta";

  constructor(private el: ElementRef) { }

  @HostListener("focus") onFocus() {
    this.highlight();
  }

  @HostListener("blur") onBlur() {
    this.removeHighlight();
  }

  private highlight() {
    this.el.nativeElement.style.borderColor = this.appHighlightOnFocus;
  }

  private removeHighlight() {
    this.el.nativeElement.style.borderColor = "revert";
  }
}
