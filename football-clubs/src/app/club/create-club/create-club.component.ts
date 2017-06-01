import { Component, OnInit, Input, Output } from '@angular/core';
import { ClubsService } from './../clubs.service';
import { IClub } from './../iclub';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.scss']
})
export class CreateClubComponent implements OnInit {

  constructor(private clubsService: ClubsService) { }

  clubForm: FormGroup;

  private name: FormControl;
  private coach: FormControl;
  private city: FormControl;
  private ground: FormControl;
  private league: FormControl;
  private capacity: FormControl;

  ngOnInit() {
    this.name = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.city = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.coach = new FormControl('');
    this.ground = new FormControl('');
    this.league = new FormControl('');
    this.capacity = new FormControl('');

    this.clubForm = new FormGroup({
      name: this.name,
      coach: this.coach,
      city: this.city,
      ground: this.ground,
      league: this.league,
      capacity: this.capacity
    });
  }

  validateName() {
    return !this.name.valid;
  }

  validateCity() {
    return !this.city.valid;
  }

  addClub(values): void {
    this.clubsService.addClub(values);
    console.log(values);
  }

}
