import { async, TestBed } from '@angular/core/testing';
import { WidgetTwoModule } from './widget-two.module';

describe('WidgetTwoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WidgetTwoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WidgetTwoModule).toBeDefined();
  });
});
