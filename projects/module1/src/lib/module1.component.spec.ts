import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PoI18nModule, PoWidgetModule } from '@portinari/portinari-ui';
import { Module1Component } from './module1.component';
import { i18nConfig } from './module1.module';

describe('Module1Component', () => {

  let component: Module1Component;
  let fixture: ComponentFixture<Module1Component>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Module1Component],
      imports: [
        PoI18nModule.config(i18nConfig),
        PoWidgetModule,
        RouterTestingModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(Module1Component);
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
