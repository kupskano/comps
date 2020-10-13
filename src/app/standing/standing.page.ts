import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StandingService } from '../services/standing.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.page.html',
  styleUrls: ['./standing.page.scss'],
})
export class StandingPage implements OnInit {
  standings;
  constructor(
    private standingService: StandingService,
    private router: Router
  ) { }

  ionViewDidEnter() {
    this.standingService.getStanding().subscribe((result)=>{
      console.log(result);
      this.standings = result;
    })
  }

  standingDetails(standing) {
    this.router.navigate(['/standingpopup', {
      'team_name': standing.team_name,
      'overall_promotion': standing.overall_promotion,
      'team_badge': standing.team_badge,
      'league_name': standing.league_name,
      'overall_league_W' : standing.overall_league_W,
      'overall_league_L' : standing.overall_league_L,
      'overall_league_PTS' : standing.overall_league_PTS
    }
  ])
  }
  

  ngOnInit() {
  }

}
