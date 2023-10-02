import { Component } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-dictionary-home',
  templateUrl: './dictionary-home.component.html',
  styleUrls: ['./dictionary-home.component.css']
})
export class DictionaryHomeComponent {
  public dictionary: any
  public word: string
  public error : any
  constructor(private Dictionary: DictionaryService) {

  }
  onInput(event: Event) {
    this.word = (event.target as HTMLInputElement).value;
    console.log(this.word);
  }
  onFormSubmit(event: any) {
    event.preventDefault();
    console.log(this.word);
    this.Dictionary.search(this.word).subscribe((response: any) => {
      console.log(response[0].meanings);
      this.dictionary = response[0].meanings[0].definitions
      this.error = response
    })
  }
}
