import { Component, OnInit  } from '@angular/core';
import { ClubsService } from './../clubs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})
export class ClubDetailsComponent implements OnInit {

  club: any;

  constructor( private clubsService: ClubsService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.club);
    this.club = this.clubsService.getClub(+this.route.snapshot.params['id']);
  }

}
