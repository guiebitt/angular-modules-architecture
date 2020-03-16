import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '@libs/loading';
import { PoButtonModule, PoMenuModule, PoPageModule, PoToolbarModule } from '@portinari/portinari-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    PoToolbarModule,
    PoPageModule,
    PoButtonModule,
    PoMenuModule,
    LoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
