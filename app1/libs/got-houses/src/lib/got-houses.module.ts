import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from '@libs/loading';
import { PoTableModule } from '@portinari/portinari-ui';
import { GotHousesComponent } from './got-houses.component';

@NgModule({
  imports: [
    CommonModule,
    PoTableModule,
    LoadingModule
  ],
  declarations: [GotHousesComponent],
  entryComponents: [GotHousesComponent],
  exports: [
    GotHousesComponent
  ]
})
export class GotHousesModule { }
