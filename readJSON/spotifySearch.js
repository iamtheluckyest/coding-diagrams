// Don't forget to run npm install to install these dependencies before running this code!
var Spotify = require('node-spotify-api');
var fs = require('fs')

var keys = {
    id: '3b3bfd0c614241468752a641ab15b9f9',
    secret: '7fcd293060e64032a9f23621aebd7286'
}

// Gets rid of the first two arguments we don't need.
process.argv.splice(0,2)

// Turns command line input array into a string, replacing the commas in the array with spaces
var songQuery = process.argv.toString().replace(',', ' ');

if (songQuery === '') {
    songQuery = 'The Sign Ace of Base';
};

// songQuery will default to 'The Sign' if it doesn't exist when called
getSong(songQuery);

function getSong(songQuery){
    var spotify = new Spotify(keys);
    spotify.search({ type: 'track', query: songQuery, limit: '1'}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        // THIS IS THE PART OF THE CODE YOU'LL WANT TO COPY IF YOU WANT TO USE IT IN YOUR CODE.

        // When saving to a JSON file, it needs to be a string. 
        var songInfo = JSON.stringify(data.tracks, null, 2);
      
        fs.writeFile('returnedData.json', songInfo, 'utf8', (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });
        
        // Now you can open your returnedData.json file and it will be readable without getting chopped off by the command line!
        // If you preview it in your browser, your JSON formatter will make it even more readable.
        // If you want to use this for your local machine, JSON formatter needs you to "Allow access to file URLs" - see https://github.com/callumlocke/json-formatter/issues/94
        
    });
}