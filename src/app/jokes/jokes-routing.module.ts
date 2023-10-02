import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesMainComponent } from './jokes-main/jokes-main.component';

const routes: Routes = [
  {path: "Jokes", component: JokesMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
