import { TestBed, inject } from '@angular/core/testing';

import { SalonservicesService } from './salonservices.service';

describe('SalonservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalonservicesService]
    });
  });

  it('should be created', inject([SalonservicesService], (service: SalonservicesService) => {
    expect(service).toBeTruthy();
  }));
});
