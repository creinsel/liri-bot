require("dotenv").config();

var Spotify = require("node-spotify-api");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

const axios = require("axios");

// const db = require('db')

// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

var userCommand = process.argv[2];


console.log(userCommand, searchTerm);

if (userCommand === "concert-this") {
    var searchTerm = process.argv.slice(3).join("+");
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        searchTerm +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      for (let i = 0; i < response.data.length; i++) {
        console.log(
          "Concert Location Date and Time for" +
            " " +
            process.argv.slice(3).join(" ")+
            ":"
        );
        console.log(response.data[i].venue.name);
        console.log(
          response.data[i].venue.city + ", " + response.data[i].venue.region
        );
        console.log(response.data[i].datetime); //fix later
        console.log("------------------");
      }
    });
}




if (userCommand === "spotify-this-song") {
    var songTitle=process.argv.slice(3).join(" ")
    spotify.search({ type: 'track', query:songTitle  }, function(data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(songTitle)
      console.log(data); 
      });
}

if (userCommand === "movie-this") {
    var searchTerm = process.argv.slice(3).join("+");
  axios
    .get(
        "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=c72d542d"
    )
    .then(function(response) {
        
            console.log("Movie: "+response.data.Title);
            console.log("Year Released: "+response.data.Year);
            console.log("IMBD Rating: "+ response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: "+response.data.Ratings[1])
        
        

        
           
        
      
        console.log("------------------");
      });

}
