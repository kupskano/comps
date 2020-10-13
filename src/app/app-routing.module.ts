import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'standing',
    loadChildren: () => import('./standing/standing.module').then( m => m.StandingPageModule)
  },
  {
    path: 'standingpopup',
    loadChildren: () => import('./standingpopup/standingpopup.module').then( m => m.StandingpopupPageModule)
  },
  {
    path: 'livescore',
    loadChildren: () => import('./livescore/livescore.module').then( m => m.LivescorePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
