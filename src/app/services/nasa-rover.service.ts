import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaRoverService {

  constructor(private http: HttpClient) { }

  key = "NCvIQOQN1AAa2JrQjCgz6uWYyJQckSdIwe2vDiAK"

  // getCuriosity() {
  //   return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${this.key}`)
  // }
  public searchCuriosity(date: string) {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${this.key}`)
  }


  // getSpirit() {
  //   return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=${this.key}`)
  // }
  public searchSpirit(date: string) {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${date}&api_key=${this.key}`)
  }


  // getOpportunity() {
  //   return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=${this.key}`)
  // }
  public searchOpportunity(date: string) {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${date}&api_key=${this.key}`)
  }

  // getPerseverance() {
  //   return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=${this.key}`)
  // }
  public searchPerseverance(date: string) {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=${date}&page=2&api_key=${this.key}`)
  }
}
