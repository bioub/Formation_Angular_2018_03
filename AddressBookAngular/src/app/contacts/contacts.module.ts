import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedModule } from '../shared/shared.module';
import { ContactService } from './shared/contact.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ContactsComponent,
    ContactsAddComponent,
    ContactsListComponent,
    ContactsShowComponent,
  ],
  providers: [
    // { provide: ContactService, useClass: ContactService }
    // équivalent à
    ContactService,
  ]
})
export class ContactsModule { }
