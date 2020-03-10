import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PoI18nModule, PoWidgetModule } from '@portinari/portinari-ui';
import { Module2Component } from './module2.component';
import { i18nConfig } from './module2.module';

describe('Module2Component', () => {

  let component: Module2Component;
  let fixture: ComponentFixture<Module2Component>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Module2Component],
      imports: [
        PoI18nModule.config(i18nConfig),
        PoWidgetModule,
        RouterTestingModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(Module2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call details', () => {
    spyOn(router, 'navigate');
    component.details();
    expect(router.navigate).toHaveBeenCalledTimes(1);
  });
});
