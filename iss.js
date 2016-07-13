// Q. Getting Some Data. write a simple node program that will output the latitude and longitude 
//of the International Space Station.
// Practice your google-fu by searching for "iss api" and figuring out the correct URL to use. 
//Hint: there are many options and they are all good :)
// Notice that the values provided by the API are very precise. Round off the values to two decimal 
//digits for a nicer display. Hint: toFixed
// Save/commit/push
var request = require('request');

var ISS_API_URL = 'https://api.wheretheiss.at/v1/satellites/25544';

request(ISS_API_URL, function(err, location, body){
    if (err) {
        console.log('there was an error');
    }
    else {
        var data = JSON.parse(body);
        console.log('the latitude of the ISS is currently: ' + data.latitude.toFixed(2));
        console.log('the longitude of the ISS is currently: ' + data.longitude.toFixed(2));
    }
});
