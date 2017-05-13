import { Injectable } from '@angular/core';

@Injectable()
export class ClubsService {

  getClubs(){
    return CLUBS;
  }

  getClub(id: Number){
    return CLUBS.find(event => event.id == id)
  }
}

const CLUBS = [{
    id: 1,
    name: 'Real',
    city: 'Madrid',
    coach: 'Zinedine Zidane',
    ground: 'Santiago Bernabeum',
    league: 'Primera Division',
    capacity:  10000
  },{
    id: 2,
    name: 'FC',
    city: 'Barcelona',
    coach: 'Luis Enrique',
    ground: 'Santiago Bernabeum',
    league: 'Primera Division',
    capacity:  10000
  }, 
  {
    id: 3,
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