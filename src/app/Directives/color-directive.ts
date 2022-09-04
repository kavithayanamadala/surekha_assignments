import { Directive ,ElementRef, HostListener, HostBinding, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ele : ElementRef, private render : Renderer2) { }
ngOnInit()
{}


@HostListener('mouseenter') onmousehover()
{
  this.render.setStyle(this.ele.nativeElement, 'background','lightblue')
}
@HostListener('mouseleave') onmouseout()
{
  this.render.setStyle(this.ele.nativeElement, 'background','none')
}

 }