import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Contact} from "../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url = environment;
  constructor(private httpClient: HttpClient) {
  }

  getContacts(){
    return this.httpClient.get<Contact[]>(`${this.url}/api/contacts`);
  }
}
