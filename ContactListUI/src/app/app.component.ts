import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactsComponent } from "./pages/contacts/contacts.component";
import {AddContactComponent} from "./pages/add-contact/add-contact.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ContactsComponent, AddContactComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ContactListUI';
}
