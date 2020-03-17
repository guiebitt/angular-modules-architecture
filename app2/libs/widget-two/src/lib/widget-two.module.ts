import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtwoComponent } from './wtwo/wtwo.component';
import { PoWidgetModule } from '@portinari/portinari-ui';

@NgModule({
  imports: [
    CommonModule,
    PoWidgetModule
  ],
  declarations: [
    WtwoComponent
  ],
  exports: [
    WtwoComponent
  ]
})
export class WidgetTwoModule {}
