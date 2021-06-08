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

