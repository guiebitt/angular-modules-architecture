import { TestBed } from '@angular/core/testing';

import { GotHousesService } from './got-houses.service';

describe('GotHousesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GotHousesService = TestBed.get(GotHousesService);
    expect(service).toBeTruthy();
  });
});
