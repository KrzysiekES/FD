import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'single-club',
  templateUrl: './single-club.component.html',
  styleUrls: ['./single-club.component.scss'],
  host: {'class': 'col-md-4'}
})
export class SingleClubComponent implements OnInit {

  @Input() club: any;

  constructor() { }

  ngOnInit() {
    console.log(this.club);
  }

}
