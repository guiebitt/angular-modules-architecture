import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoI18nService, PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public literals = {};

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.home.bind(this) }
  ];

  constructor(
    poI18nService: PoI18nService,
    private readonly router: Router
  ) {
    poI18nService.getLiterals().subscribe(
      literals => {
        this.literals = literals;
      }
    );
  }

  private home() {
    this.router.navigate(['']);
  }
}
