import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotHousesPageComponent } from './got-houses-page.component';

const routes: Routes = [
  {
    path: '',
    component: GotHousesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GotHousesPageRoutingModule { }
