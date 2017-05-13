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
  search: any;

  constructor(private clubsService: ClubsService) { }

  searchChange(search): void {
    
    function findClub(club){
      if(club.name === search) {
      return club;
      }
    }
    this.clubs.find(findClub);
  }
  ngOnInit() {
    this.clubs = this.clubsService.getClubs();

     
  }

}
