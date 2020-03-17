import { async, TestBed } from '@angular/core/testing';
import { WidgetOneModule } from './widget-one.module';

describe('WidgetOneModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WidgetOneModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WidgetOneModule).toBeDefined();
  });
});
