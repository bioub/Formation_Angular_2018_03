import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContactService } from './contact.service';
import { environment } from '../../../environments/environment';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ContactService]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to call getList', inject([ContactService, HttpTestingController],
    (service: ContactService, httpMock: HttpTestingController) => {
      const data = [{id: 1, name: 'Toto', email: 'toto@gmail.com', phone: '06'}];

      service.getList().subscribe((contacts) => {
        expect(contacts).toBe(data);
      });

      httpMock.expectOne(`${environment.baseUrl}/users`).flush(data);
      httpMock.verify();
  }));

});
