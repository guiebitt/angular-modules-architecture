import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoI18nModule, PoWidgetModule } from '@portinari/portinari-ui';
import { module2En } from './i18n/module2-en';
import { module2Es } from './i18n/module2-es';
import { module2Pt } from './i18n/module2-pt';
import { Module2Component } from './module2.component';

export const module2Context = {
  'pt-BR': module2Pt,
  'en-US': module2En,
  es: module2Es
};

@NgModule({
  declarations: [Module2Component],
  imports: [
    CommonModule,
    PoI18nModule,
    PoWidgetModule
  ],
  exports: [Module2Component]
})
export class Module2Module { }
