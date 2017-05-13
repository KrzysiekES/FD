import { Component, OnInit, Input, Output } from '@angular/core';
import { ClubsService } from './../clubs.service';
import { IClub } from './../iclub';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent implements OnInit {

  constructor(private clubsService: ClubsService) { }

  club: IClub = {
    id: 3,
    name: '',
    coach: '',
    city: '',
    ground: '',
    league: '',
    capacity: 0
  }

  ngOnInit() {}

  addClub(): void {
    
    this.clubsService.addClub(this.club);
    this.club.id++;
  }
}
