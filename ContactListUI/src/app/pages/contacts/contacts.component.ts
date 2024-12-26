import { Component } from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {environment} from "../../../environments/environment.development";
import {Contact} from "../../models/contact.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  title = 'Contacts';

  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {
    console.log(environment.api);
  }

  getContact() {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }
}
