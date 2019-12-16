
// Required run variables
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require('moment');
var fs = require("fs");
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


// Storage Variables
var nodeArgs = process.argv;
var value = "";

for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    value = value + " " + nodeArgs[i];
  } else {
    value += nodeArgs[i];
  }
}
// Capitalizes first letter of search term
capitalize();

// Store Command
var command = process.argv[2];


// ID which command has been input and run proper function
switch (command){
  case "movie-this":
    getMovie();
    break;
  case "spotify-this-song":
    getSong();
    break;
  case "concert-this":
    getConcert();
    break;
  case "do-what-it-says":
    getRandom();
    break;
  case undefined:
    console.log("Oops! You need to tell me a command and search term. Command options are 'movie-this', 'spotify-this-song', 'concert-this', and 'do-what-it-says'. If you don't provide a search term one will autofill.")
} 

// movie-this feature
function getMovie(){
  if (value === ""){
    value = "Mr.Nobody";
  }

  axios.get("http://www.omdbapi.com/?t="+value +"&y=&plot=short&apikey=trilogy").then(
    function(response) {
      var title = response.data.Title;
      var release= response.data.Released;
      var rate= response.data.imdbRating;
      var review= response.data.Ratings[1].Value;
      var origin = response.data.Country;
      var language = response.data.Language;
      var plot =  response.data.Plot;
      var actors =  response.data.Actors;

      console.log("Title: " +title);
      console.log("Release Date: " +release);
      console.log("IMDB Rating: " +rate);
      console.log("Rotten Tomato Score: " +review);
      console.log("Country of Origin: " +origin);
      console.log("Languages Available: " +language);
      console.log("Movie Plot: " +plot);
      console.log("Actors: " +actors);
    }
  );
}

// spotify-this-song feature
function getSong(){
  if (value === ""){
    value = "The Sign";
    }
    console.log(value);
  spotify.search({ type: 'track', query: value, limit: '10' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    for (i=0; i<10; i++){
      if (data.tracks.items[i].name == value){
        var name = data.tracks.items[i].name;
        var album = data.tracks.items[i].album.name;
        var artist = data.tracks.items[i].album.artists[0].name;
        var link = data.tracks.items[i].external_urls.spotify;
        console.log("Song: " +name); 
        console.log("Album: " +album); 
        console.log("Artist(s): " +artist);
        console.log("Link: " +link);
        break;
      }
    }
  }); 
}


  //concert-this feaatures
  function getConcert(){
    if (value === ""){
      value = "Celion Dion";
    }
    axios.get("https://rest.bandsintown.com/artists/" +value +"/events?app_id=codingbootcamp").then(
    function(response) {
      if (response.data === null){
        return console.log(error);
        } else {
          var name = response.data[0].venue.name;
          var location = response.data[0].venue.city +", " +response.data[0].venue.region +", " +response.data[0].venue.country;
          var date = response.data[0].datetime;

          date = moment(date, "YYYY-MM-DD THH:mm:ss").format("MM-DD-YYYY");    
          console.log("Name of Venue: " +name);
          console.log("Location of Venue: " +location);
          console.log("Date of Concert: " +date); 
    }
      }
      )
  }
  

  // do-what-it-says Command Feature
  function getRandom(){
    fs.readFile("random.txt", "utf8", function(error, data) {
      if (error) {
        return console.log(error);
      }
      var dataArr = data.split(",");
     if (dataArr[0] === "spotify-this-song"){
       value = dataArr[1].substring(1, 19);
       capitalize();
       getSong();
     }
    
    });
  }


  function capitalize(){
    value = value.split(" ");
    // capitalize each word
    for (i = 0; i < value.length; i++)
    {
      value[i] = value[i].substring(0, 1).toUpperCase() + value[i].substring(1).toLowerCase();
    }
    // rejoin back into a sentence
    value = value.join(" ", value);
  }  
