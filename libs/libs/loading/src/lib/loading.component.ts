import { Component } from '@angular/core';

@Component({
  selector: 'libs-loading',
  templateUrl: './loading.component.html'
})
/**
 * Componenente de loading que utiliza o componente padrão do PO
 */
export class LoadingComponent {

  /**
   * Texto do loading
   */
  public text = '';

  /**
   * Definine se será bloqueada a tela inteira ou apenas o container em que o componente de loading está inserido
   */
  public screenLock = false;

  /**
   * Define se o loading está sendo mostrado ou não
   */
  public show = false;

  /**
   * Permite atribuir o texto do loading
   */
  public setLoadingText(text = '') {
    this.text = text;
  }

  /**
   * Apresenta o loading, bloqueando a tela
   */
  public showLoading() {
    this.show = true;
  }

  /**
   * Esconde o loading, desbloqueando a tela
   */
  public hideLoading() {
    this.show = false;
  }
}
