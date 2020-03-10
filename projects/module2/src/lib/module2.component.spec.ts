import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PoI18nModule, PoWidgetModule } from '@portinari/portinari-ui';
import { Module2Component } from './module2.component';
import { module2Context } from './module2.module';

describe('Module2Component', () => {

  let component: Module2Component;
  let fixture: ComponentFixture<Module2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Module2Component],
      imports: [
        PoI18nModule.config({
          default: {
            language: 'pt-BR',
            context: 'module2'
          },
          contexts: {
            module2: module2Context
          }
        }),
        PoWidgetModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2Component);
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
