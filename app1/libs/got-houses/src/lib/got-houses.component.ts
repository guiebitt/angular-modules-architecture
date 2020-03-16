import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@libs/loading';
import { PoTableColumn } from '@portinari/portinari-ui';
import { GOTHouse } from './got-house.interface';
import { GotHousesService } from './got-houses.service';

@Component({
  selector: 'app1-got-houses',
  templateUrl: './got-houses.component.html',
  styleUrls: ['./got-houses.component.css'],
  providers: [GotHousesService]
})
export class GotHousesComponent implements OnInit {

  items: GOTHouse[];
  columns: PoTableColumn[] = [
    {
      label: 'Name',
      property: 'name'
    },
    {
      label: 'Region',
      property: 'region'
    },
    {
      label: 'Coat of Arms',
      property: 'coatOfArms'
    }
  ];

  constructor(
    private readonly loadingService: LoadingService,
    private readonly gotHousesService: GotHousesService
  ) { }

  ngOnInit() {
    this.loadingService.executeWithLoading(
      () => this.gotHousesService.getHouses()
    ).subscribe(result => this.items = result);
  }
}
