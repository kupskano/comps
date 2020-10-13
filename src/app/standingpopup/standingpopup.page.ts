import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-standingpopup',
  templateUrl: './standingpopup.page.html',
  styleUrls: ['./standingpopup.page.scss'],
})
export class StandingpopupPage implements OnInit {

  team_name: any;
  overall_promotion: any;
  team_badge: any;
  league_name: any;
  overall_league_W: any;
  overall_league_L: any;
  overall_league_PTS: any;



  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.team_name = this.actRoute.snapshot.paramMap.get('team_name');
    this.overall_promotion = this.actRoute.snapshot.paramMap.get('overall_promotion');
    this.team_badge = this.actRoute.snapshot.paramMap.get('team_badge');
    this.league_name = this.actRoute.snapshot.paramMap.get('league_name');
    this.overall_league_W = this.actRoute.snapshot.paramMap.get('overall_league_W');
    this.overall_league_L = this.actRoute.snapshot.paramMap.get('overall_league_L');
    this.overall_league_PTS = this.actRoute.snapshot.paramMap.get('overall_league_PTS');
  }

}
