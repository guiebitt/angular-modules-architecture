import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoWidgetModule } from '@portinari/portinari-ui';
import { WoneComponent } from './wone/wone.component';

@NgModule({
  imports: [
    CommonModule,
    PoWidgetModule
  ],
  declarations: [
    WoneComponent
  ],
  exports: [
    WoneComponent
  ]
})
export class WidgetOneModule { }
