import { Component, OnInit, Input, Output } from '@angular/core';
import { ClubsService } from './../clubs.service';
import { IClub } from './../iclub';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent implements OnInit {

  constructor(private clubsService: ClubsService) { }

  clubForm: FormGroup;

  ngOnInit() {
    let name = new FormControl();
    let coach = new FormControl();
    let city = new FormControl();
    let ground = new FormControl();
    let league = new FormControl();
    let capacity = new FormControl();

    this.clubForm = new FormGroup( {
        name: name,
        coach: coach,
        city: city,
        ground: ground,
        league: league,
        capacity: capacity
    });
  }

    addClub(values): void {
      this.clubsService.addClub(values);
      console.log(values);
    }

}
