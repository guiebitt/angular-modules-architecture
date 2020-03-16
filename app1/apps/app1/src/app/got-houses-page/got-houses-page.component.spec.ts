import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotHousesPageComponent } from './got-houses-page.component';

describe('GotHousesPageComponent', () => {
  let component: GotHousesPageComponent;
  let fixture: ComponentFixture<GotHousesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotHousesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotHousesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
