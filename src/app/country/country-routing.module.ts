import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryMainComponent } from './country-main/country-main.component';

const routes: Routes = [
  { path: "Country", component: CountryMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
