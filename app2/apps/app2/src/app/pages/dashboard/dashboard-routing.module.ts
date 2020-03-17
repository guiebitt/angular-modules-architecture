import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoneComponent } from '@app2/widget-one';
import { DashboardComponent } from './dashboard.component';
import { WtwoComponent } from 'libs/widget-two/src/lib/wtwo/wtwo.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: '',
    component: WoneComponent,
    outlet: 'wone'
  },{
    path: '',
    component: WtwoComponent,
    outlet: 'wtwo'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
