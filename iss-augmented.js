// Augment your ISS application to tell the user how "far" the ISS is from them. Here is how you 
//will do it:
// Using the prompt module, ask the user to enter their location (e.g. "montreal")
// Using Google's Geolocation API, find out the latitude and longitude of the provided location. 
//Here is how:
// This URL: https://maps.googleapis.com/maps/api/geocode/json?address=montreal will show the 
//lat/long for montreal
// Explore this URL in your web browser to figure out where the lat/lng is located. Try to pass 
//different values for "address" for educational purposes :)
// When you are comfortable with finding the location based on an input address, you can then 
//calculate the distance between the ISS and the user:
// Look at this URL: http://www.movable-type.co.uk/scripts/latlong.html
// It specifies a formula for calculating the distance. Scroll the page to the JavaScript portion, 
//and create a function that uses the provided code. You don't need to understand what is going on 
//in there, it is very mathy!
// NOTE: In order for this code to work, you'll need to add the following code at the beginning of 
//your program:
//   Number.prototype.toRadians = function() {
//     return this * Math.PI / 180;
//   }
// Finally, display a message to the user telling them what their "distance" to the ISS is.
// Save/commit/push


var issUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
var request = require('request');
var prompt = require('prompt');
var locationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='; 


Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }



function calcDistance (lat1,lat2,lon1,lon2){
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    var e = d/1000 //km conversion from meters
    console.log('the distance between the International Space Station and your location is: ' + Math.floor(e) + ' kms.');
}


request(issUrl, function(err, location, body) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var parseBody = JSON.parse(body);
        var issLatitude = parseBody.latitude;
        var issLongitude = parseBody.longitude;
        // console.log('iss latitude: ' + issLatitude); //to check my ISS latitude
        // console.log('iss longitude: ' + issLongitude); //to check my ISS longitude
    }


prompt.get('userLocation', function(err, answer) {
    if (err){
        console.log('sorry, there was an error');
            }
    else {
        var placeUrl = locationUrl + answer.userLocation;
        request(placeUrl, function (err, location, body) {
            if (err){
                console.log('there was an error');
            }
            else {
                var parseBody = JSON.parse(body);
                var userLatitude = parseBody.results[0].geometry.location.lat;
                var userLongitude = parseBody.results[0].geometry.location.lng;
                // console.log('user latitude ' + userLatitude); //to check my user latitude
                // console.log('user longitude ' + userLongitude); //to check my user longitude
            calcDistance(issLatitude, userLatitude, issLongitude, userLongitude);
                
            }
});
            }
        })
    }
);
