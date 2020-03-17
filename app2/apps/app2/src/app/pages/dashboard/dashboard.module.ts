import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetOneModule } from '@app2/widget-one';
import { WidgetTwoModule } from '@app2/widget-two';
import { PoPageModule } from '@portinari/portinari-ui';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    WidgetOneModule,
    WidgetTwoModule,
    PoPageModule
  ]
})
export class DashboardModule { }
