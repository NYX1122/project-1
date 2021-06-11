var queryString = document.location.search;
var parameters = queryString.split("=");
trailGeocode = "";
trackerObj = {};

for (var i = 1; i <5; i++) {
	var valuePasser = parameters[i].split("&");
	if(i === 1) {
		trackerObj.name = valuePasser[0];
	}
	if(i === 2) {
		latitudeLongitude = valuePasser[0];
		latitudeLongitude = latitudeLongitude.split("lon");
		latitude = latitudeLongitude[0].replace("lat", "");
		longitude = latitudeLongitude[1];
		trackerObj.address = latitude + ", " + longitude;
		trailGeocode = "lon=" + longitude + "&lat=" + latitude;
	}
	if(i === 3) {
		trackerObj.range = valuePasser[0];
	}
	if(i === 4) {
		trackerObj.expertise = parameters[4];
	}
};

console.log(trackerObj);

trailApiUrl = "https://trailapi-trailapi.p.rapidapi.com/trails/explore/?" + trailGeocode;

fetch(trailApiUrl, {
		"method": "GET",
    	"headers": {
        	"x-rapidapi-key": "c6c5ba3134msh910d133557b3135p17ea21jsnc3a6398170be",
        	"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
    	}
	})
    .then(function(response) {
        response.json().then(function(data) {
			console.log(data);
			var cardGroup = "";
			var cards = "";
			for (i = 1; i <= 2; i++) {
				cardGroup = $("#card-wrapper-" + i);
				cards = cardGroup.children();
				for (var e = 0; e < 3; e++) {
					var card = cards[e];
					for (var y = 0; y < 4; y++) {
						cardChildren = card.children();
						console.log(cardChildren[y]);
					};
				};
			};
        });
    })
    .catch(function(error) {
        alert("Unable to connect to servers");
});


var getTrailAddress = function (geocode) {
	var geocodeApi = "http://api.positionstack.com/v1/reverse?access_key=6a0a7bfe7991fb3b771c2cfee43f426b&query=";
	var fetchGeocodeUrl = geocodeApi + geocode;
	fetch(fetchGeocodeUrl).then(function(response) {
		if (response.ok) {
			response.json().then(function(data) {
				console.log(data);
			});
		}
		else {
			alert("Address not found.");
		}
	})
	.catch(function(error) {
		alert("Unable to connect to servers.");
	});
}