import { async, TestBed } from '@angular/core/testing';
import { GotHousesModule } from './got-houses.module';

describe('GotHousesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GotHousesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GotHousesModule).toBeDefined();
  });
});
