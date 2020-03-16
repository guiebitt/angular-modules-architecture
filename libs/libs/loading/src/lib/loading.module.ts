import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PoLoadingModule } from '@portinari/portinari-ui';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';

@NgModule({
  entryComponents: [LoadingComponent],
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    PoLoadingModule
  ]
})
export class LoadingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingModule,
      providers: [
        LoadingService
      ]
    };
  }
}
