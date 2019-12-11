import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  @Input() contact: Contact;
  isFavorite: boolean = false;
}
