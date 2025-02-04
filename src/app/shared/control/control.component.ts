import { Component, ContentChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  //@HostListener('click') onClick2() { console.log('Clicked! 2'); }
  @Input({required: true}) label!: string;
  @ContentChild('input, textarea') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  //private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input, textarea');

  constructor(private hostElement: ElementRef) {}

  onClick() {
    console.log(this.hostElement);
    console.log(this.control);
    //console.log(this.control());
  }
}
