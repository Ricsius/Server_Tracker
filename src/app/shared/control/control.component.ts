import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

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
  @Input({required: true}) label!: string;
  //@HostListener('click') onClick2() { console.log('Clicked! 2'); }

  constructor(private hostElement: ElementRef) {}

  onClick() {
    console.log(this.hostElement);
  }
}
