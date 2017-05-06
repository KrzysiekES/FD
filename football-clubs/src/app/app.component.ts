import { Component, OnInit } from '@angular/core';
import { Club } from './club/club';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';


  constructor(){

  }

  ngOnInit(){
      let clubs = [];

      let x = new Club('ssss','sss','sss','sss','sss', 2222);
      clubs.push(x);
     
      let y = new Club('ssss','sss','sss','sss','sss', 2222);

      clubs.push(y); 
      //console.log(clubs);
  }
}
