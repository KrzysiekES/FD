import { Component, OnInit, Input } from '@angular/core';
import { ClubsService} from './../clubs.service';

@Component({
  selector: 'single-club',
  templateUrl: './single-club.component.html',
  styleUrls: ['./single-club.component.scss'],
  host: {'class': 'col-md-4'}
})
export class SingleClubComponent implements OnInit {

  @Input() club: any;

  constructor(private clubsService: ClubsService) { }

  removeClub(): any {
    this.clubsService.removeClub(this.club.id);
  }

  ngOnInit() {
    console.log(this.club);
  }

}
