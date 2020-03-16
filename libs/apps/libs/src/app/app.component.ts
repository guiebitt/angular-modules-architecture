import { Component } from '@angular/core';
import { LoadingService } from '@libs/loading';
import { PoMenuItem } from '@portinari/portinari-ui';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  constructor(private readonly loading: LoadingService) { }

  private onClick() {
    alert('Clicked in menu item');
  }

  loading10s() {
    this.loading.executeWithLoading(
      () => of('After loading').pipe(delay(5000))
    ).subscribe(result => {
      console.log(result);
    });
  }
}
