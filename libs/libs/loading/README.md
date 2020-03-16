# Loading [POC]

Possibilita a injeção do serviço `LoadingService` que possui a funcionalidade de apresentação do [loading do Portinari](https://portinari.io/documentation/po-loading-overlay) enquanto um `Observable` ou `Promise` é executado.

## Como utilizar?

- Instale o pacote:
  ```bash
  npm install --save @libs/loading
  ```

- Importe o módulo na raiz da aplicação `AppModule`:
  ```typescript
  @NgModule({
    imports: [
      LoadingModule
    ]
  })
  export class AppModule { }
  ```

- Declare o serviço no construtor de um componente:
  ```typescript
  constructor(private readonly loading: LoadingService) { }
  ```

- Utilize o comando `executeWithLoading` encapsulando um `Observable` ou `Promise`:
  ```typescript
  this.loading.executeWithLoading(
    () => of('After loading').pipe(delay(5000))
  ).subscribe(result => {
    console.log(result);
  });
  ```

## Atenção

- O retorno do `Observable` ou `Promise` estará disponível no `subscribe`;
- O serviço é `Singleton`;