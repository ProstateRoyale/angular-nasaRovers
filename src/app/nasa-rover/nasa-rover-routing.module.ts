import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaRoverMainComponent } from './nasa-rover-main/nasa-rover-main.component';

const routes: Routes = [
  {path: "NasaRovers", component: NasaRoverMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaRoverRoutingModule { }
