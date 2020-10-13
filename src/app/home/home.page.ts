import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teams;
  constructor(
    private teamsService: TeamsService,
    private router: Router,
    private modalController: ModalController
  ) {}
  

  ionViewDidEnter(){
    setTimeout(() => {
      this.teamsService.getTeams().subscribe((data) => {
        console.log(data);
        this.teams = data;
        // console.log(this.teams.coaches.coach_name);
      })
    }, 2000);
  }

  viewDetails(team) {
    this.router.navigate(['/teamdata',
      { 
        'coaches': [
              {
              'coach_name' : team.coach_name
              }
        ],
          'team_name': team.team_name,
          'team_key' : team.team_key
       }

      
  
    
  ]);
  // const result = team.coaches.find(d => d.coach_name === id).coaches

  }

  options = {
    
    centeredSlides:true,
    slidePerView: 1,
    autoplay: true
  }


  // teamModal(team) {
  //     this.modalController.create({
  //       component: TeampopupPage,
  //       cssClass: '.my-modal-css',
  //       componentProps: {team}
  //     }).then(modal => {
  //       modal.present()
  //       return modal.onDidDismiss()
  //     }).then(() => {
  //       this.teamsService.getTeams()
  //     })
  // }



 

}
