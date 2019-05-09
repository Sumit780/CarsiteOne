import { TestBed } from '@angular/core/testing';

import { CarDataTransferService } from './car-data-transfer.service';

describe('CarDataTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarDataTransferService = TestBed.get(CarDataTransferService);
    expect(service).toBeTruthy();
  });
});
