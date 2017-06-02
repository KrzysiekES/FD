import { WikipediaService } from './../wikipedia.service';
import { Component, OnInit } from '@angular/core';
import { Club } from './../club/club';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor( private wiki: WikipediaService) { }

  clubs: any[] = [];
  ngOnInit() {
          
      let x = new Club(1,'Real','Madrid','Zidane','Santiago bernabeum','Primera Division', 2222);
      let y = new Club(2, 'FC Barcelona','Barcelona', 'Luis Erique','Camp Nou','Primera Division', 2222);
      let z = new Club(3, 'Lechia', 'Gdańsk', 'Nowak', 'Traugutta', 'Ekstraklasa', 100000 )

      this.clubs.push(x);
      this.clubs.push(z);
      this.clubs.push(y);

      this.wiki.getClubs().subscribe( 
        d => {
          console.log(d);
        }
      );

  }

}
