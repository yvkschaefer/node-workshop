// Q. Getting Some Data. write a simple node program that will output the latitude and longitude 
//of the International Space Station.
// Practice your google-fu by searching for "iss api" and figuring out the correct URL to use. 
//Hint: there are many options and they are all good :)
// Notice that the values provided by the API are very precise. Round off the values to two decimal 
//digits for a nicer display. Hint: toFixed
// Save/commit/push

var url = 'https://api.wheretheiss.at/v1/satellites/25544';
var request = require('request');//this line of logic is still lost on me...


request(url, function(err, location, body){
    if (err) {
        console.log('there was an error');
    }
    else {
        var parseBody = JSON.parse(body);
        console.log('the latitude of the ISS is currently: ' + parseBody.latitude.toFixed(2));
        console.log('the longitude of the ISS is currently: ' + parseBody.longitude.toFixed(2));
    }
});
