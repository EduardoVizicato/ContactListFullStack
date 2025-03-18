import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {environment} from "../../../environments/environment.development";
import {ContactModel} from "../../models/contact.model";
import {NgForOf} from "@angular/common";
import {AddContactComponent} from "../add-contact/add-contact.component";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-contacts',
  imports: [
    NgForOf, AddContactComponent, RouterLink, RouterLinkActive, RouterOutlet
  ],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {

  title = 'Contacts';

  contacts?: ContactModel[];

  constructor(private contactsService: ContactsService) {
    // console.log(environment.api);
    console.log(this.contacts);
  }

  getContact() {
    this.contactsService.getContacts()
      .subscribe({
        next: (response) => {
          this.contacts = response;
      }
    });
  }

  ngOnInit(): void {
    this.getContact();
  }
}
