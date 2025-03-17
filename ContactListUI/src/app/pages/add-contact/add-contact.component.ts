import { Component } from '@angular/core';
import {ContactsComponent} from "../contacts/contacts.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-add-contact',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

}
