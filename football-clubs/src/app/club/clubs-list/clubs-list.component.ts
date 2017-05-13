import { Component, OnInit, Input } from '@angular/core';
import { ClubsService } from './../clubs.service';


@Component({
  selector: 'clubs-list',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})

export class ClubsListComponent implements OnInit {
  clubs: any;

  constructor(private clubsService: ClubsService) { }

  ngOnInit() {
    this.clubs = this.clubsService.getClubs();
  }

}
