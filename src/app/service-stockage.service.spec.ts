import { TestBed, inject } from '@angular/core/testing';

import { ServiceStockageService } from './service-stockage.service';

describe('ServiceStockageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceStockageService]
    });
  });

  it('should be created', inject([ServiceStockageService], (service: ServiceStockageService) => {
    expect(service).toBeTruthy();
  }));
});
