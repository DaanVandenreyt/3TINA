import { Component } from '@angular/core';
import { Contact } from './models/contact.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  myContact: Contact;

  ngOnInit(): void {
    this.myContact = new Contact(
      'John Doe', 
      'john.doe@gmail.com', 
      '01166424893',
       true,
      'assets/avatar.png'
      );
  }

  handleData(event: Contact){
    console.log('Recieved data!', event);
  }

}
