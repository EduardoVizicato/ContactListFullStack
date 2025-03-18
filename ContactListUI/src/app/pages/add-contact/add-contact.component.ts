import { Component } from '@angular/core';
import {ContactsComponent} from "../contacts/contacts.component";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ContactsService} from "../../services/contacts.service";
import {ContactModel} from "../../models/contact.model";

@Component({
  selector: 'app-add-contact',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  constructor(private contactService: ContactsService, private router: Router) {
  }
  contactform= new FormGroup({
    id: new FormControl(''),
    contactName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    isActive : new FormControl(true, [Validators.required]),
  })

  onFormSubmit() {
    console.log(this.contactform.value);
    const contactData: ContactModel = {
      id: this.contactform.value.id || '',
      contactName: this.contactform.value.contactName || '',
      phoneNumber : this.contactform.value.phoneNumber || '',
      isActive : this.contactform.value.isActive || true,
    }
    this.contactService.addContact(contactData)
      .subscribe({
        next: (response) => {
          console.log("the contact has been added", response);
          this.router.navigate(['/']);
          this.contactform.reset();
        },
        error: (error) => {
          console.log(error);
        }
      })

  }
}
