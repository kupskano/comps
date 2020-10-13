import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandingPage } from './standing.page';

const routes: Routes = [
  {
    path: '',
    component: StandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandingPageRoutingModule {}
