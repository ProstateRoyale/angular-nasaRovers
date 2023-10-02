import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

import { DictionaryRoutingModule } from './dictionary-routing.module';
import { DictionaryHomeComponent } from './dictionary-home/dictionary-home.component';


@NgModule({
  declarations: [
    DictionaryHomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DictionaryRoutingModule,
  ],
  exports: [
    DictionaryHomeComponent,
  ]
})
export class DictionaryModule { }
