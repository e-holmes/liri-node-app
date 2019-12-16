# liri-node-app

## What is this app?
This liri-node-app is meant to help you save time in finding out information on your favorite movies and songs. As well as helping you find information on your favorite artists upcoming concert.

## App Index
    I. Variables
        a. Variables required for program to run
            *spotify api
            *axios
            *moment
            *fs
            *dotenv
            *keys.js
            *spotify keys
        b. Storage Variables
            *Search Variable Array
            *Search term place holder
            *Turning Array into string and storing in search term holder
            *Function to capitalize first letter of each word in search term
            *Storage for command
    II. Command Trigger
        a. movie-this
            *Search for information on a movie. Default fill "Mr. Nobody" if no search term given.
        b. spotify-this-song
            *Search for information on a song. Default fill "The Sign" if no search term given.
        c. concert-this
            *Search for information on an artist next upcoming concert. Default fill "Celion Dion" if no search term given.
        d. do-what-it-says
            *Read the Random.txt file and run the command with provided search term.
        e. undefined
            *If no command provided prompt user with message asking for command with list of available commands.
    III. Functions
        a. getMovie function for movie-this feature
            *Autofills "Mr. Nobody" if no search term provided. Does API request with search term and returns movie title, release date, IMDB rating, Rotten Tomato score, country of origin, languages available, movie plot, and actors.
        b. getSong function for spotify-this-song feature
            *Autofills "The Sign" if no search term provided. Does API request with search term and returns song name, album name, artist(s), link to spotify preview.
        c. getConcert function for concert-this feature
            *Autofills "Celion Dion" if no search term provided. Does API request with search term and returns name of concert venue, location of concert, and date of concert.
        d. getRandom function for do-what-it-says feauture
            *Reads random.txt file and creates and array to store the contents. Fetches the first item in the array and ids it as a spotify-this-song command. Trims the " off the beginning and end of search term from the second array item and stores it in search term variable holder. Runs the capitalize function to capitalize the first letter of each search term. Then runs getSong function.
        e. capitalize function
            *Turns the string into an array. Steps through array capitalizing the first letter of each word in the array. Stitches array back into string.


## How To use This App
    Step 1. In git command console type "npm install" and hit enter

    Step 2. Decide wether you want to find out information on a movie, song, artists upcoming concert, or want to see what random.txt does.

    Step 3. Type "node liri.js" and then type the command for which feature you want:
        a. movie-this (MOVIE NAME)
        b. spotify-this-song (SONG NAME)
        c. concert-this (ARTIST NAME)
        d. do-what-it-says
    
    Step 4. Hit enter

    https://drive.google.com/file/d/1ifSkCKXkr4rIFHbua10oq8OoFYLQ1SpZ/view?usp=sharing - automatic!
    [Google](https://drive.google.com/file/d/1ifSkCKXkr4rIFHbua10oq8OoFYLQ1SpZ/view?usp=sharing)


## Technologies Included
* Node-Spotify-API
    * https://www.npmjs.com/package/node-spotify-api

* Axios
    * https://www.npmjs.com/package/axios

    * OMDB API
        * http://www.omdbapi.com/

    * Bands In Town API
        * http://www.artists.bandsintown.com/bandsintown-api

* Moment
    * https://www.npmjs.com/package/moment

* DotEnv
    * https://www.npmjs.com/package/dotenv



## Developer
    Elizabeth Holmes was the sole developer of this app and provides all maintenance. To report any bugs email her at apples.banana@oranges.com.