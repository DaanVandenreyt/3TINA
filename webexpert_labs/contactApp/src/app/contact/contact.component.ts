import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  @Input() contact: Contact;
  @Input() index: number;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  isFavorite: boolean = false;

  constructor(private service: ContactService) {  }

  toggleFavorite(id: string, isFavorite: boolean): void {
    this.service.updateContact(id, {isFavorite: isFavorite})
                .subscribe(() => this.onUpdate.emit())
    this.onUpdate.emit();
  }
}
