import { Component, OnInit } from '@angular/core';
import { Club } from './../club/club';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  clubs: any[] = [];
  ngOnInit() {
          

      let x = new Club('Real','Madrid','Zidane','Santiago bernabeum','Primera Division', 2222);
      this.clubs.push(x);
     
      let y = new Club('FC Barcelona','Barcelona', 'Luis Erique','Camp Nou','Primera Division', 2222);
      
      let z = new Club('Lechia', 'Gdańsk', 'Nowak', 'Traugutta', 'Ekstraklasa', 100000 )
      this.clubs.push(z);
      this.clubs.push(y); 
     // console.log(clubs);
  }

}
