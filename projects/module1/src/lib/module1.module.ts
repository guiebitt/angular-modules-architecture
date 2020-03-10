import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoI18nModule, PoWidgetModule } from '@portinari/portinari-ui';
import { module1En } from './i18n/module1-en';
import { module1Es } from './i18n/module1-es';
import { module1Pt } from './i18n/module1-pt';
import { Module1Component } from './module1.component';

export const module1Context = {
  'pt-BR': module1Pt,
  'en-US': module1En,
  es: module1Es
};

@NgModule({
  declarations: [Module1Component],
  imports: [
    CommonModule,
    PoI18nModule,
    PoWidgetModule
  ],
  exports: [Module1Component]
})
export class Module1Module { }
