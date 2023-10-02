import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesMainComponent } from './jokes-main/jokes-main.component';


@NgModule({
  declarations: [
    JokesMainComponent
  ],
  imports: [
    CommonModule,
    JokesRoutingModule
  ],
  exports: [
    JokesMainComponent,
  ]
})
export class JokesModule { }
