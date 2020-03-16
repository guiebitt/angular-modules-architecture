import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoLoadingModule } from '@portinari/portinari-ui';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  entryComponents: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PoLoadingModule
  ],
  exports: [
    LoadingComponent,
    PoLoadingModule
  ]
})
export class LoadingModule { }
