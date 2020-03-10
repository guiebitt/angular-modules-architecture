import { Component, OnInit } from '@angular/core';
import { PoI18nService } from '@portinari/portinari-ui';

@Component({
  selector: 'lib-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component implements OnInit {

  public literals = {};
  public showDetails = false;

  constructor(poI18nService: PoI18nService) {
    poI18nService.getLiterals({
      context: 'module2'
    }).subscribe(
      literals => {
        this.literals = literals;
      }
    );
  }

  ngOnInit() {
  }

  details(): void {
    this.showDetails = !this.showDetails;
  }
}
