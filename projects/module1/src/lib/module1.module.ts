import { NgModule } from '@angular/core';
import { PoI18nConfig, PoI18nModule, PoWidgetModule } from '@portinari/portinari-ui';
import { generalEn } from './i18n/general-en';
import { generalEs } from './i18n/general-es';
import { generalPt } from './i18n/general-pt';
import { Module1Component } from './module1.component';
import { CommonModule } from '@angular/common';

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
    }
  }
};

@NgModule({
  declarations: [Module1Component],
  imports: [
    CommonModule,
    PoI18nModule.config(i18nConfig),
    PoWidgetModule
  ],
  exports: [Module1Component]
})
export class Module1Module { }
