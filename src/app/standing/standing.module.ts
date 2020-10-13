import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandingPageRoutingModule } from './standing-routing.module';

import { StandingPage } from './standing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandingPageRoutingModule
  ],
  declarations: [StandingPage]
})
export class StandingPageModule {}
