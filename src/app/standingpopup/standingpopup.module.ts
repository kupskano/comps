import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandingpopupPageRoutingModule } from './standingpopup-routing.module';

import { StandingpopupPage } from './standingpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandingpopupPageRoutingModule
  ],
  declarations: [StandingpopupPage]
})
export class StandingpopupPageModule {}
