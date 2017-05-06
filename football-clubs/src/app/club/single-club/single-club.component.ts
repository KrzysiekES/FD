import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'single-club',
  templateUrl: './single-club.component.html',
  styleUrls: ['./single-club.component.css']
})
export class SingleClubComponent implements OnInit {

  @Input() club: any;

  constructor() { }

  ngOnInit() {
    console.log(this.club);
  }

}
