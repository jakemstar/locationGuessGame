const fs = require('fs');

var locations = fs.readdirSync('./public/locations');

function getRandomLocation(){
    locationIndex = Math.floor(Math.random()*locations.length);
    return locations[locationIndex];
}

module.exports = { getRandomLocation };