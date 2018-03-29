import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  public contact = new Contact();

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  addContact() {
    this.contactService.create(this.contact).subscribe((contact) => {
      this.contactService.events.emit('contact.written');
      this.router.navigate(['', 'contacts', contact.id]);
    });
  }

}
