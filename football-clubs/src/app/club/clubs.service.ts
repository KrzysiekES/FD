import { Injectable } from '@angular/core';
import { IClub } from './iclub';

@Injectable()
export class ClubsService {
  id: number = 100;

  getClubs(){
    return CLUBS;
  }

  getClub(id: Number){
    return CLUBS.find(event => event.id == id)
  }

  addClub(club: IClub){
    club.id = this.id ++;
    CLUBS.push(club);
  }

  removeClub(id: number){
    let x = CLUBS.find(event => event.id == id);
    CLUBS.splice(x.id, 1);
  }

}

const CLUBS: IClub[] = [{
    id: 0,
    name: 'Real',
    city: 'Madrid',
    coach: 'Zinedine Zidane',
    ground: 'Santiago Bernabeum',
    league: 'Primera Division',
    capacity:  10000
  },{
    id: 1,
    name: 'FC',
    city: 'Barcelona',
    coach: 'Luis Enrique',
    ground: 'Santiago Bernabeum',
    league: 'Primera Division',
    capacity:  10000
  }, 
  {
    id: 2,
    name: 'Lechia',
    city: 'Gdansk',
    coach: 'Piotr Nowal',
    ground: 'PGE Arena',
    league: 'Ekstraklasa',
    capacity:  10000
  },
  {
    id: 4,
    name: 'Wisła',
    city: 'Krakow',
    coach: 'Michał Chrapek',
    ground: 'Reymonta',
    league: 'Ekstraklasa',
    capacity:  10200
}]