import { Observable } from 'rxjs';

/** Interface com a definição da função genérica */
export type ILoadingGenericFn<Return> = (...args: any[]) => Return;

/** Interface com a definição da função de observable genérica */
export type ILoadingObservableFn<Return> = (...args: any[]) => Observable<Return>;

/** Interface com a definição da função de promise genérica */
export type ILoadingPromiseFn<Return> = (...args: any[]) => Promise<Return>;
