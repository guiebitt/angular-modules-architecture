import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from '@libs/loading';
import { PoTableModule } from '@portinari/portinari-ui';
import { GotHousesComponent } from './got-houses.component';

@NgModule({
  declarations: [GotHousesComponent],
  imports: [
    CommonModule,
    PoTableModule,
    LoadingModule
  ],
  exports: [
    GotHousesComponent
  ]
})
export class GotHousesModule { }
