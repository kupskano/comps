import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  getStanding() {
    return this.httpClient.get('https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=3c7a30234f2e18a14276c015aaeb0fd4865c0c29720bade7fa5e7170f0c2adf3');
  }

  constructor(
    private httpClient: HttpClient
  ) { }


 
}
