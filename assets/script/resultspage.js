fetch("https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lon=-112.032997&lat=40.514114", {
		"method": "GET",
    	"headers": {
        	"x-rapidapi-key": "c6c5ba3134msh910d133557b3135p17ea21jsnc3a6398170be",
        	"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
    	}
	})
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    })
    .catch(function(error) {
        alert("Unable to connect to servers");
	});

var geocodeApi = "http://api.positionstack.com/v1/reverse?access_key=6a0a7bfe7991fb3b771c2cfee43f426b&query=";
var fetchGeocodeUrl = geocodeApi + "40.48021,-112.02235";
fetch(fetchGeocodeUrl).then(function(response) {
	if (response.ok) {
		response.json().then(function(data) {
			console.log(data);
		});
	}
	else {
		alert("City not found. Reloading.");
	}
})
.catch(function(error) {
	alert("Unable to connect to servers. Reloading.");
});
