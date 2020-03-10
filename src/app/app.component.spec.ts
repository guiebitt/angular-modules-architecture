import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PoI18nModule, PoMenuModule, PoPageModule, PoToolbarModule } from '@portinari/portinari-ui';
import { Module1Module } from 'module1';
import { Module2Module } from 'module2';
import { AppComponent } from './app.component';
import { i18nConfig } from './app.module';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PoI18nModule.config(i18nConfig),
        PoToolbarModule,
        PoMenuModule,
        PoPageModule,
        Module1Module,
        Module2Module
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});
