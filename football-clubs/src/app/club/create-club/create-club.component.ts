import { Component, OnInit } from '@angular/core';
import { ClubsService } from './../clubs.service';


@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent implements OnInit {

  constructor(private clubsService: ClubsService) { }

  ngOnInit() {
  }

}
