import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GOTHouse } from './got-house.interface';

@Injectable()
export class GotHousesService {

  constructor(private readonly httpClient: HttpClient) { }

  getHouses(): Observable<GOTHouse[]> {
    return this.httpClient.get<GOTHouse[]>('/api/houses');
  }
}
