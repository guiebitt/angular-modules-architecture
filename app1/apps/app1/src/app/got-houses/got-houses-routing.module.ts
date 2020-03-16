import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotHousesComponent } from '@app1/got-houses';

const routes: Routes = [
  {
    path: '',
    component: GotHousesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GotHousesRoutingModule { }
