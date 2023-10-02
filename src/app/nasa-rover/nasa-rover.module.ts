import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoverRoutingModule } from './nasa-rover-routing.module';
import { NasaRoverMainComponent } from './nasa-rover-main/nasa-rover-main.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { SpiritComponent } from './spirit/spirit.component';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { PerseveranceComponent } from './perseverance/perseverance.component';


@NgModule({
  declarations: [
    NasaRoverMainComponent,
    OpportunityComponent,
    SpiritComponent,
    CuriosityComponent,
    PerseveranceComponent,
  ],
  imports: [
    CommonModule,
    NasaRoverRoutingModule
  ],
  exports: [
    NasaRoverMainComponent
  ]
})
export class NasaRoverModule { }
