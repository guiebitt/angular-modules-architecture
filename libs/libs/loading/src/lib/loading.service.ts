import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { from, Observable } from 'rxjs';
import { finalize, mergeMap, tap } from 'rxjs/operators';
import { ILoadingObservableFn, ILoadingPromiseFn } from './loading-generic-fn.interface';
import { LoadingComponent } from './loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingComponentRef = undefined;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly appRef: ApplicationRef,
    private readonly injector: Injector) {
  }

  public executeWithLoading<ReturnType>(
    callback: ILoadingObservableFn<ReturnType> | ILoadingPromiseFn<ReturnType>, ...args: any[]
  ): Observable<ReturnType> {

    let fn = callback(...args);
    if (fn instanceof Promise) {
      fn = from(fn);
    }

    return new Observable<ReturnType>(observer => {
      observer.next();
      observer.complete();
    }).pipe(
      tap(() => this.showLoading()),
      mergeMap(() => fn),
      finalize(() => this.hideLoading())
    );
  }

  public showLoading() {
    if (this.loadingComponentRef === undefined) {
      this.createLoadingComponent();
    }

    this.loadingComponentRef.instance.showLoading();
  }

  public hideLoading() {
    if (this.loadingComponentRef !== undefined) {
      this.loadingComponentRef.instance.hideLoading();
    }
  }

  private createLoadingComponent() {

    if (this.loadingComponentRef === undefined) {

      this.loadingComponentRef = this.componentFactoryResolver
        .resolveComponentFactory(LoadingComponent)
        .create(this.injector);

      this.appRef.attachView(this.loadingComponentRef.hostView);

      const domElem = (this.loadingComponentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;

      document.body.appendChild(domElem);
    }
  }
}
