import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PoMenuModule, PoPageModule, PoToolbarModule } from '@portinari/portinari-ui';
import { Module1Module } from 'module1';
import { Module2Module } from 'module2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    Module1Module,
    Module2Module,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
