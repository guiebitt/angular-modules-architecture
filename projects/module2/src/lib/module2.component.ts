import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoI18nService } from '@portinari/portinari-ui';

@Component({
  selector: 'lib-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component implements OnInit {

  public literals = {};

  constructor(
    private readonly route: Router,
    private readonly activatedRoute: ActivatedRoute,
    poI18nService: PoI18nService
  ) {
    poI18nService.getLiterals().subscribe(
      literals => {
        this.literals = literals;
      }
    );
  }

  ngOnInit() {
  }

  details(): Promise<boolean> {
    console.log('Click details');
    return this.route.navigate(['./../'], {
      relativeTo: this.activatedRoute
    });
  }
}
