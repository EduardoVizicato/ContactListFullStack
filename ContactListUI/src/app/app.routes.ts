import { Routes } from '@angular/router';
import {AddContactComponent} from "./pages/add-contact/add-contact.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";

export const routes: Routes = [
  { path: '', component: ContactsComponent },
  { path: 'add-contact', component: AddContactComponent },
];
