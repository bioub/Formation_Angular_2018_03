import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListComponent } from './contacts-list.component';
import { RouterModule } from '@angular/router';
import { ContactService } from '../shared/contact.service';

import { of } from 'rxjs/observable/of';
import { EventEmitter } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([]), ],
      declarations: [ ContactsListComponent ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
        {
          provide: ContactService,
          useValue: {
            events: new EventEmitter<string>(),
            getList() {
              return of([{
                id: 1,
                name: 'Jean Dupont',
                email: 'jdupont@mail.com',
                phone: '0123456789'
              }]);
            }
          }
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Jean Dupont', () => {
    const firstListElt = fixture.debugElement.nativeElement.querySelector('.list-group-item');

    expect(firstListElt.textContent).toContain('Jean Dupont');
  });

});
