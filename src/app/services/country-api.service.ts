import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  constructor(private http: HttpClient) { }
  public search(term: string) {
    return this.http.get(`https://restcountries.com/v3.1/name/${term}`)
  }
}
