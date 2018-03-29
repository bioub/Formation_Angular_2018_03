import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { map, filter, switchMap } from 'rxjs/operators';
import { ContactService } from '../shared/contact.service';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../shared/contact.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit, OnDestroy {

  public contact = new Contact();
  private contactSub: Subscription;

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.contactSub = this.activatedRoute.params.pipe(
      map((params) => params.id),
      filter((id) => !Number.isNaN(Number(id))),
      switchMap((id) => this.contactService.getById(id)),
    ).subscribe((contact) => {
      this.contact = contact;
    });
  }

  ngOnDestroy() {
    this.contactSub.unsubscribe();
  }

}
