import { TestBed, inject } from '@angular/core/testing';

import { PrestationServicesService } from './prestation-services.service';

describe('PrestationServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrestationServicesService]
    });
  });

  it('should be created', inject([PrestationServicesService], (service: PrestationServicesService) => {
    expect(service).toBeTruthy();
  }));
});
