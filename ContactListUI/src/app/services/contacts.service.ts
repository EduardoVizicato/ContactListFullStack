import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {ContactModel} from "../models/contact.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url = environment.api;
  constructor(private httpClient: HttpClient) {
  }

  getContacts(): Observable<ContactModel[]> {
    return this.httpClient.get<ContactModel[]>(`${this.url}/api/Contact`);
  }
  addContact(contact: ContactModel): Observable<ContactModel> {
    console.log("entered in service");
    return this.httpClient.post<ContactModel>(`${this.url}/api/Contact`, contact);
  }
}
