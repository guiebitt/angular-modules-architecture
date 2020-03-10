import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PoI18nModule, PoWidgetModule } from '@portinari/portinari-ui';
import { Module1Component } from './module1.component';
import { module1Context } from './module1.module';

describe('Module1Component', () => {

  let component: Module1Component;
  let fixture: ComponentFixture<Module1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Module1Component],
      imports: [
        PoI18nModule.config({
          default: {
            language: 'pt-BR',
            context: 'module1'
          },
          contexts: {
            module1: module1Context
          }
        }),
        PoWidgetModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call details', () => {
    expect(component.showDetails).toBeFalsy();
    component.details();
    expect(component.showDetails).toBeTruthy();
  });
});
