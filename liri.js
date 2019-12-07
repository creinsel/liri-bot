require("dotenv").config();

var Spotify = require("node-spotify-api");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

const axios = require("axios");

// const db = require('db')

// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

var userCommand = process.argv[2];
var searchTerm = process.argv.slice(3).join("+");

console.log(userCommand, searchTerm);

if (userCommand === "concert-this") {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        searchTerm +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      for (let i = 0; i < response.data.length; i++) {
            console.log("Concert Location Date and Time for"+" "+ process.argv.slice(3).join(" ")+":")
            console.log(response.data[i].venue.name);
            console.log(response.data[i].venue.city+", "+response.data[i].venue.region);
            console.log(response.data[i].datetime)
            console.log('------------------')
      }

      
    });
}
