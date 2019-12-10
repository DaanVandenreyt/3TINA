import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  contactList : Contact[];

  ngOnInit(): void {
    this.contactList = [
      new Contact('jane doe', 'jane.doe@mail.com', '0113448239', true, '../assets/avatar.jpg'),
      new Contact('john doe', 'john.doe@mail.com', '011424839', false, 'assets/avatar.jpg'),
      new Contact('Dries Swinnen', 'dries.swinnen@pxl.be', '011664839', true, 'assets/avatar.jpg')
    ];
  
  }

  handleData(event: Contact){
    console.log('Recieved data!', event);
  }

}
