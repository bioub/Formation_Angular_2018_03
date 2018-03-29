import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts$: Observable<Contact[]>;

  constructor(
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    this.contacts$ = this.contactService.getList();

    this.contactService.events.pipe(
      filter((name) => name === 'contact.written')
    ).subscribe(() => {
      this.contacts$ = this.contactService.getList();
    });
    /*
    this.contactService.getList().subscribe({
      next(contacts) {
        console.log('next', contacts);
      },
      error(err) {
        console.log('error', err);
      },
      complete() {
        console.log('complete');
      },
    });
    */
  }

}
