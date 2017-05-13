export class Club {

    id: number;
    name: string;
    city: string;
    coach: string;
    ground: string;
    league: string;
    capacity: number;

    constructor(id, name, city, coach, ground, league, capacity){
        this.id = id;
        this.name = name;
        this.city = city;
        this.coach = coach;
        this.ground = ground;
        this.league = league;
        this.capacity = capacity;
    }
    
}
