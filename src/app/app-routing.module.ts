import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChicagoComponent } from './chicago/chicago.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DallasComponent } from './dallas/dallas.component';

const routes: Routes = [
  { path: 'chicago', component: ChicagoComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'washington', component: WashingtonComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'dallas', component: DallasComponent }  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }