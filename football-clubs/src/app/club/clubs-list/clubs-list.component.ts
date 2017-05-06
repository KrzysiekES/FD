import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clubs-list',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})
export class ClubsListComponent implements OnInit {


  @Input() clubs: any;

  constructor() { }

  ngOnInit() {
    console.log(this.clubs);
  }

}
