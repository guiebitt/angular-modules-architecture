import { Component, OnInit } from '@angular/core';
import { PoI18nService } from '@portinari/portinari-ui';

@Component({
  selector: 'lib-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {

  public literals = {};
  public showDetails = false;

  constructor(poI18nService: PoI18nService) {
    poI18nService.getLiterals({
      context: 'module1'
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
