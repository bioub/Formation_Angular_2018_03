import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactService {

  public events = new EventEmitter<string>();

  constructor(
    private httpClient: HttpClient,
  ) { }

  getList() {
    return this.httpClient.get<Contact[]>(`${environment.baseUrl}/users`);
  }

  getById(id) {
    return this.httpClient.get<Contact>(`${environment.baseUrl}/users/${id}`);
  }

  create(contact) {
    return this.httpClient.post<Contact>(`${environment.baseUrl}/users`, contact);
  }
}
