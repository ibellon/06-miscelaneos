import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private element: ElementRef) { 
    console.log("Directiva Resaltado llamada");
    
  }

  @Input('appResaltado') nuevoColor: any;

  @HostListener('mouseenter') mouseEntro() {
    //console.log("Entra el mouse color: "+this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalgo() {
    //console.log("Sale el mouse");
    this.resaltar('');
  }

  private resaltar(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
