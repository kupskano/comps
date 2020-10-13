import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandingpopupPage } from './standingpopup.page';

const routes: Routes = [
  {
    path: '',
    component: StandingpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandingpopupPageRoutingModule {}
