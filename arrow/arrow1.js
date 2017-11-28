
var Horse = function constructHorse(horseName, horseAge) {  
  this.name = horseName;
  this.age = horseAge;
};

Horse.prototype.rideIt = function rideAHorse() {
    console.log(`I'm riding ${this.age} years old ${this.name}`);
}

var brandNewHorse = new Horse("Kasztanka", 12);
brandNewHorse.rideIt();



