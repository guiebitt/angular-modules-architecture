import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { WidgetOneModule } from '@app2/widget-one';
import { PoModule } from '@portinari/portinari-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    WidgetOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
