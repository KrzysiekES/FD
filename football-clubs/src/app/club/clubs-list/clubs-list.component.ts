import { Component, OnInit, Input } from '@angular/core';
import { ClubsService } from './../clubs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'clubs-list',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})

export class ClubsListComponent implements OnInit {
  clubs: any;
  clubsBeforeFiltered: any;
  search: any;

  constructor(private clubsService: ClubsService) { }

  searchChange(search): void {
    let x = this.clubsBeforeFiltered.filter(c => {
        return c.name.includes(search);
    });
    this.clubs = x;
  }
  ngOnInit() {
    this.clubs = this.clubsService.getClubs();
    this.clubsBeforeFiltered = this.clubs;
     
  }

}
