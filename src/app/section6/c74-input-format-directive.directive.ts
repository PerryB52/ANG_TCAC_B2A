import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appC74InputFormatDirective]'
})
export class C74InputFormatDirectiveDirective {

  @Input('appC74InputFormatDirective') format;

  constructor(private el: ElementRef) { }

  //HostListener - this decorator allows us to subscribe raised by the dom element that is hosting this directive
  @HostListener('focus') onFocus(){
    console.log("on focus");
  }

  @HostListener('blur') onBlur(){
    console.log("on blur");
    let value: string = this.el.nativeElement.value;

    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
}
