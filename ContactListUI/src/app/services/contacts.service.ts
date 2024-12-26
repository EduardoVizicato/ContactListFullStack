import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Contact} from "../models/contact.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url = environment.api;
  constructor(private httpClient: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.url}/api/Contact`);
  }
}
