import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoLoadingModule } from '@portinari/portinari-ui';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    PoLoadingModule
  ],
  providers: [
    LoadingService
  ]
})
export class LoadingModule { }
