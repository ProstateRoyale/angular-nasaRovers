import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryMainComponent } from './country-main/country-main.component';
import { ShortNumberPipe } from '../pipes/short-number.pipe';
 


@NgModule({
  declarations: [
    CountryMainComponent,
    ShortNumberPipe
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ], 
  exports: [
    CountryMainComponent
  ]
})
export class CountryModule { }
