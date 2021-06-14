var queryString = document.location.search;
var parameters = queryString.split("=");
var geocodeApi = "http://api.positionstack.com/v1/reverse?access_key=6a0a7bfe7991fb3b771c2cfee43f426b&query=";
var geocode = "";
var trackerObj = {};
var tracker = 0;
var trackerTwo = 0;

//sepearates and stores query string in tracker object for later use
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

var displayData = function (data, address) {
	var cardGroup = "";
	var cards = "";
	var card = "";
	var trail = "";
	var trailNumber = 0;
	var listChildren = "";
	var listChild = "";
	//iterates through card-wrappers (2)
	for (i = 1; i <= 2; i++) {
		cardGroup = $("#card-wrapper-" + i);
		cards = cardGroup.children();
		// iterates through individual cards (3)
		for (var e = 0; e < 3; e++) {
			card = cards.eq(e).children();
			// iterates through elements through elements on each card
			for (var y = 0; y < 4; y++) {
				cardChild = card[y];
				trail = data.data[trailNumber];
				if (y === 0) {
					if(trail.thumbnail) {
						cardChild.setAttribute("src", trail.thumbnail);
						cardChild.setAttribute("class", "yes-image");
					}
				}
				else {
				}
				if (y === 1) {
					cardChild.innerHTML = trail.name;
				}
				if (y === 2) {
					listChildren = cardChild.children;
					for(x = 0; x < 4; x++) {
						listChild = listChildren[x];
						if(x === 0) {
							listChild.setAttribute("class", "address-" + tracker);
							tracker++;
						}
						if(x === 1) {
							if(trail.difficulty === "") {
								listChild.innerHTML = "Difficulty: Unavailable";
							}
							else {
								listChild.innerHTML = "Difficulty: " + trail.difficulty;
							}
						}
						if(x === 2) {
							if(trail.length) {
								var lengthString = "Length: " + trail.length + " Miles";
								listChild.innerHTML = lengthString;
							}
							else {
								listChild.innerHTML = "Length: Unavailable";
							}
						}
						if(x === 3) {
							listChild.setAttribute("class", "trail-" + trackerTwo);
							trackerTwo++;
						}
					}
				}
			};
			trailNumber++;
		};
	};
}

var addressGive = function(data) {
	var trails = data.data;
	var cardAddressSelector = "";
	var integer = 0;
	var addressSet = function() {
		cardAddressSelector = $(".address-" + integer);
		var geocode = trails[integer].lat + "," + trails[integer].lon;
		var fetchGeocodeUrl = geocodeApi + geocode;
		fetch(fetchGeocodeUrl).then(function(response) {
			if (response.ok) {
				response.json().then(function(data) {
					if(integer < 6) {
						cardAddressSelector.text("Approximate Address: " + data.data[0].label);
						integer++
						addressSet();
					}
					else {
					}
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
	addressSet();
}

var weatherGive = function(data) {
	var trails = data.data;
	var cardDaySelector = "";
	var integerTwo = 0;
	var weatherSet = function() {
		var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + trails[integerTwo].lat + "&lon=" + trails[integerTwo].lon + "&units=imperial&exclude=minutely,hourly&appid=bd623837758ad959f4db0c37c609a865";
		fetch(weatherApi).then(function(response) {
			if (response.ok) {
				response.json().then(function(data) {
					var weather = data.daily;
					if(integerTwo < 6) {
						cardDaySelector = $(".trail-" + integerTwo);
						var weekArr = [{dayOne: [{wind: 0}, {temp:0}, {forecast: ""}, {uvi: 0}]}, 
						{dayTwo: [{wind: 0}, {temp:0}, {forecast: ""}, {uvi: 0}]}, 
						{dayThree: [{wind: 0}, {temp:0}, {forecast: ""}, {uvi: 0}]}, 
						{dayFour: [{wind: 0}, {temp:0}, {forecast: ""}, {uvi: 0}]},
						{dayFive: [{wind: 0}, {temp:0}, {forecast: ""}, {uvi: 0}]},
						{daySix: [{wind: 0}, {temp:0}, {forecast: ""}, {uvi: 0}]},
						{daySeven: [{wind: 0}, {temp:0}, {forecast: ""}, {uvi: 0}]},
						{dayEight: [{wind: 0}, {temp:0}, {forecast: ""}, {uvi: 0}]}];
						var weatherDay = "";
						for(i = 0; i < 8; i++) {
							weatherDay = weather[i];
							if(i === 0) {
								for(e = 0; e < 5; e++) {
									if(e === 0) {
										weekArr[0].dayOne[0].wind = weatherDay.wind_speed;
									}
									if(e === 1) {
										weekArr[0].dayOne[1].temp = weatherDay.feels_like.day;
									}
									if(e === 2) {
										weekArr[0].dayOne[2].forecast = weatherDay.weather[0].description;
									}
									if(e === 3) {
										weekArr[0].dayOne[3].uvi = weatherDay.uvi;
									}
								}
							}
							if(i === 1) {
								for(e = 0; e < 5; e++) {
									if(e === 0) {
										weekArr[1].dayTwo[0].wind = weatherDay.wind_speed;
									}
									if(e === 1) {
										weekArr[1].dayTwo[1].temp = weatherDay.feels_like.day;
									}
									if(e === 2) {
										weekArr[1].dayTwo[2].forecast = weatherDay.weather[0].description;
									}
									if(e === 3) {
										weekArr[1].dayTwo[3].uvi = weatherDay.uvi;
									}
								}
							}
							if(i === 2) {
								for(e = 0; e < 5; e++) {
									if(e === 0) {
										weekArr[2].dayThree[0].wind = weatherDay.wind_speed;
									}
									if(e === 1) {
										weekArr[2].dayThree[1].temp = weatherDay.feels_like.day;
									}
									if(e === 2) {
										weekArr[2].dayThree[2].forecast = weatherDay.weather[0].description;
									}
									if(e === 3) {
										weekArr[2].dayThree[3].uvi = weatherDay.uvi;
									}
								}
							}
							if(i === 3) {
								for(e = 0; e < 5; e++) {
									if(e === 0) {
										weekArr[3].dayFour[0].wind = weatherDay.wind_speed;
									}
									if(e === 1) {
										weekArr[3].dayFour[1].temp = weatherDay.feels_like.day;
									}
									if(e === 2) {
										weekArr[3].dayFour[2].forecast = weatherDay.weather[0].description;
									}
									if(e === 3) {
										weekArr[3].dayFour[3].uvi = weatherDay.uvi;
									}
								}
							}
							if(i === 4) {
								for(e = 0; e < 5; e++) {
									if(e === 0) {
										weekArr[4].dayFive[0].wind = weatherDay.wind_speed;
									}
									if(e === 1) {
										weekArr[4].dayFive[1].temp = weatherDay.feels_like.day;
									}
									if(e === 2) {
										weekArr[4].dayFive[2].forecast = weatherDay.weather[0].description;
									}
									if(e === 3) {
										weekArr[4].dayFive[3].uvi = weatherDay.uvi;
									}
								}
							}
							if(i === 5) {
								for(e = 0; e < 5; e++) {
									if(e === 0) {
										weekArr[5].daySix[0].wind = weatherDay.wind_speed;
									}
									if(e === 1) {
										weekArr[5].daySix[1].temp = weatherDay.feels_like.day;
									}
									if(e === 2) {
										weekArr[5].daySix[2].forecast = weatherDay.weather[0].description;
									}
									if(e === 3) {
										weekArr[5].daySix[3].uvi = weatherDay.uvi;
									}
								}
							}
							if(i === 6) {
								for(e = 0; e < 5; e++) {
									if(e === 0) {
										weekArr[6].daySeven[0].wind = weatherDay.wind_speed;
									}
									if(e === 1) {
										weekArr[6].daySeven[1].temp = weatherDay.feels_like.day;
									}
									if(e === 2) {
										weekArr[6].daySeven[2].forecast = weatherDay.weather[0].description;
									}
									if(e === 3) {
										weekArr[6].daySeven[3].uvi = weatherDay.uvi;
									}
								}
							}
							if(i === 7) {
								for(e = 0; e < 5; e++) {
									if(e === 0) {
										weekArr[7].dayEight[0].wind = weatherDay.wind_speed;
									}
									if(e === 1) {
										weekArr[7].dayEight[1].temp = weatherDay.feels_like.day;
									}
									if(e === 2) {
										weekArr[7].dayEight[2].forecast = weatherDay.weather[0].description;
									}
									if(e === 3) {
										weekArr[7].dayEight[3].uvi = weatherDay.uvi;
									}
								}
							}
						};
						var average = [(weekArr[0].dayOne[0].wind + weekArr[0].dayOne[1].temp + weekArr[0].dayOne[3].uvi)/3, (weekArr[1].dayTwo[0].wind + weekArr[1].dayTwo[1].temp + weekArr[1].dayTwo[3].uvi)/3,
						(weekArr[2].dayThree[0].wind + weekArr[2].dayThree[1].temp + weekArr[2].dayThree[3].uvi)/3, (weekArr[3].dayFour[0].wind + weekArr[3].dayFour[1].temp + weekArr[3].dayFour[3].uvi)/3,
						(weekArr[4].dayFive[0].wind + weekArr[4].dayFive[1].temp + weekArr[4].dayFive[3].uvi)/3, (weekArr[5].daySix[0].wind + weekArr[5].daySix[1].temp + weekArr[5].daySix[3].uvi)/3,
						(weekArr[6].daySeven[0].wind + weekArr[6].daySeven[1].temp + weekArr[6].daySeven[3].uvi)/3, (weekArr[7].dayEight[0].wind + weekArr[7].dayEight[1].temp + weekArr[7].dayEight[3].uvi)/3]
						var lowest = 0;
						for (var i = 1; i < average.length; i++) {
							if(average[i] < average[lowest]) {
								lowest = i;
							}
						}
						var day = dayjs().add((lowest + 1), "day");
						var bestDay = day.format("dddd");
						cardDaySelector.text("Best Day: " + bestDay);
						integerTwo++;
						weatherSet();
					}
				})
			}
			else {
				alert("Weather not found.");
			}
		})
		.catch(function(error) {
			alert("Unable to connect to servers.");
		});
	}
	weatherSet();
}

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
		displayData(data);
		addressGive(data);
		weatherGive(data);
	});
})
.catch(function(error) {
	alert("Unable to connect to servers");
});