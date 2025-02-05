import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @Output() add = new EventEmitter<Ticket>();
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  title = '';
  text = '';

  onSubmit() {
    const ticket: Ticket = {
      id: '',
      status: 'open',
      title: this.title,
      request: this.text
    };

    this.add.emit(ticket);
    //this.title = '';
    //this.text = '';
    this.form?.nativeElement.reset();
    //this.form()?.nativeElement.reset();
  }
}
