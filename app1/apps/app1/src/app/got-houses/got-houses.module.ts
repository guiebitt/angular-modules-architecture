import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GotHousesModule } from '@app1/got-houses';
import { GotHousesRoutingModule } from './got-houses-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GotHousesRoutingModule,
    GotHousesModule
  ]
})
export class GotHousesWrapperModule { }
