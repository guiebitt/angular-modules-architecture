import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtwoComponent } from './wtwo.component';

describe('WtwoComponent', () => {
  let component: WtwoComponent;
  let fixture: ComponentFixture<WtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
