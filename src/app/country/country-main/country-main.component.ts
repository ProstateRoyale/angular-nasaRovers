import { Component } from '@angular/core';
import { CountryApiService } from 'src/app/services/country-api.service';

@Component({
  selector: 'app-country-main',
  templateUrl: './country-main.component.html',
  styleUrls: ['./country-main.component.css']
})
export class CountryMainComponent {
  public country: any
  term: string
  public error :any
  constructor(private Countries: CountryApiService) {

  }
  onInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
    console.log(this.term);
  }
  onFormSubmit(event: any) {
    event.preventDefault();
    console.log(this.term);
    this.Countries.search(this.term).subscribe((response: any) => {
      console.log(response[0]);
      this.country = response[0]
      this.error = response
    })
  }
}
