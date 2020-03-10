import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PoI18nConfig, PoI18nModule, PoMenuModule, PoPageModule, PoToolbarModule } from '@portinari/portinari-ui';
import { module1Context, Module1Module } from 'module1';
import { module2Context, Module2Module } from 'module2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { generalEn } from './i18n/general-en';
import { generalEs } from './i18n/general-es';
import { generalPt } from './i18n/general-pt';

export const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general'
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn,
      es: generalEs
    },
    module1: module1Context,
    module2: module2Context
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    PoI18nModule.config(i18nConfig),
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    Module1Module,
    Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
