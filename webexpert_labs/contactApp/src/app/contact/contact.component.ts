import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  @Input() contact: Contact;
  @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();
  isFavorite: boolean = false;

  onClick(): void{
    console.log('Button clicked. Status van favorite is:' + this.isFavorite);
  }

  submit(){
    this.onSubmit.emit(this.contact);
  }

}
