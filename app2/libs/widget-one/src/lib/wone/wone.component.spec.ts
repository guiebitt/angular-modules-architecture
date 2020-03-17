import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoneComponent } from './wone.component';

describe('WoneComponent', () => {
  let component: WoneComponent;
  let fixture: ComponentFixture<WoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
