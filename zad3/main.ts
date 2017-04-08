var clubs;

let getClubsFromJSON = () => {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function (data) {
        if (xobj.readyState == 4 && xobj.status == "200") {
            clubs = JSON.parse(xobj.response);
            clubs = clubs.clubs;
        }
    };
    xobj.send(null);
};

class Club {
    name: string;
    city: string;
    stadium: string;
    capacity: number;
    coach:string;
    chairman:string;
    league:any

    contructor(name: string, city:string, stadium:string, capacity:number, coach:string, chairman:string, league:any) {
        this.name = name;
        this.city = city;
        this.stadium = stadium;
        this.capacity = capacity;
        this.coach = coach;
        this.league = league;
    }
}

let addClub = (name: string, city:string, stadium:string, capacity:number, coach:string, chairman:string, league:any) => {
    let club: Club = new Club(this.name, this.city, this.stadium, this.capacity, this.coach, this.chairman, this.league);
    clubs.push(club);
}

function showAllClubsTable(){
    document.body.innerHTML = '<table id="table"><tr><td>Name</td><td>City</td><td>Staduim</td><td>Capacity</td><td>Coach</td><tr></table>';
    for(let i = 0; i < clubs.length ; i ++){
        document.getElementById('table').innerHTML += '<tr id="td' + i + '"></tr>';
        document.getElementById('td'+ i ).innerHTML = '<td>' + clubs[i].name + '</td><td>' + clubs[i].city +  '</td><td>' + clubs[i].stadium +  '</td><td>' + clubs[i].capacity + '</td><td>' + clubs[i].coach + '</td>';
    }
}

(function init() {
    let data;
    var that = this;
    
    getClubsFromJSON();
    
    setTimeout(function(){
        addClub('Fc Gdansk', 'gdansk', 'ergo arena', 121231212, 'Boniek', 'Ekstraklasa');
        showAllClubsTable();
    },200)
    
})();
