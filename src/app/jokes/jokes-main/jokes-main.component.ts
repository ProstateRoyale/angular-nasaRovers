import { Component } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-jokes-main',
  templateUrl: './jokes-main.component.html',
  styleUrls: ['./jokes-main.component.css']
})
export class JokesMainComponent {
  joke: any
  constructor(private Joke: JokesService) {
    this.Joke.randomJoke().subscribe((response: any) => {
      console.log(response);
      this.joke = response
    })
  }
  onFormChange(event: any) {
    event.preventDefault();
    this.Joke.randomJoke().subscribe((response: any) => {
      console.log(response);
      this.joke = response
    })
  }
}
