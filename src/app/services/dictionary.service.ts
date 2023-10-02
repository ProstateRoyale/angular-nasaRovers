import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }
  public search(word: string) {
    return this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  }
}
