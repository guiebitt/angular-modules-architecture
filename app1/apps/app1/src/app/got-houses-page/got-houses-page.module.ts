import { PoPageModule } from '@portinari/portinari-ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GotHousesModule } from '@app1/got-houses';
import { GotHousesPageRoutingModule } from './got-houses-page-routing.module';
import { GotHousesPageComponent } from './got-houses-page.component';

@NgModule({
  declarations: [
    GotHousesPageComponent
  ],
  imports: [
    CommonModule,
    GotHousesPageRoutingModule,
    GotHousesModule,
    PoPageModule
  ]
})
export class GotHousesPageModule { }
