import { DictionaryModule } from './dictionary/dictionary.module';
import { CountryModule } from './country/country.module';
import { NasaRoverModule } from './nasa-rover/nasa-rover.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { JokesModule } from './jokes/jokes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './UI/not-found/not-found.component';
import { HomeComponent } from './UI/home/home.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent,
    HomeComponent,
  ],
  imports: [
    JokesModule,
    HttpClientModule,
    DictionaryModule,
    NasaRoverModule,
    CountryModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
