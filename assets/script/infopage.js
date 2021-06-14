var inputTextEl = $("#input-text");
var questionEl = $("#more-info-page-title");
var formWrapperEl = $("#form-holder");
var formButtonEl = $("#next-question");
var selectInput = $("<select>");
var questionsArr = ["What is your name?", "What is your address / city?", "What is your maximum travel distance in miles?", "What is your experience level?", "What day would you like to go biking?"];
var locationData = ""
var trackerObj = {name: "", address: "", range: "", expertise: ""};

var submitHandler = function(string) {
	console.log(string);
	if (inputTextEl.attr("placeholder") === "name") {
		trackerObj.name = string;
	}
	if (inputTextEl.attr("placeholder") === "address") {
		if(string === ""){
			alert("Please enter a valid city name / address.");
			inputTextEl.attr("placeholder", "name");
		}
		else {
			addressSubmitHandler(string);
		}
	}
	if (inputTextEl.attr("placeholder") === "range") {
		trackerObj.range = string;
		string = parseInt(string);
		if(string === "" || typeof string === "string"){
			alert("Please enter a number");
			inputTextEl.attr("placeholder", "address");
		}
	}
	if (selectInput.attr("name") === "expertise") {
		trackerObj.expertise = string;
	}
};

var reset = function() {
	inputTextEl.val("");
	if (inputTextEl.attr("placeholder") === "name") {
		questionEl.text(questionsArr[1]);
		inputTextEl.attr("placeholder", "address");
	}
	else if (inputTextEl.attr("placeholder") === "address") {
		questionEl.text(questionsArr[2])
		inputTextEl.attr("placeholder", "range");
	}
	else if (inputTextEl.attr("placeholder") === "range") {
		questionEl.text(questionsArr[3]);
		inputTextEl.attr("placeholder", "");
		inputTextEl.detach();
		selectInput.attr("name", "expertise");
		selectInput.addClass("col-12 form-select form-select-lg mb-3");
		selectInput.html("<option selected>Beginner</option><option>Intermediate</option><option>Advanced</option>");
		$("#next-question").before(selectInput);
		formButtonEl.html("Get Results");
	}
	else if (selectInput.attr("name") === "expertise") {
		localStorage.setItem(trackerObj.name, trackerObj);
		location.replace("./ResultsPage.html?name=" + trackerObj.name + "&address=" + trackerObj.address + "&range=" + trackerObj.range + "&expertise=" + trackerObj.expertise);
	}
};

var addressSubmitHandler = function(address) {
    var geocodeApi = "https://api.positionstack.com/v1/forward?access_key=6a0a7bfe7991fb3b771c2cfee43f426b&query=";
    var fetchGeocodeUrl = geocodeApi + address;
	fetch(fetchGeocodeUrl).then(function(response) {
		if (response.ok) {
			response.json().then(function(data) {
				trackerObj.address = "lat" + data.data[0].latitude + "lon" + data.data[0].longitude;
			});
		}
		else {
			alert("City / address not found. Reloading.");
			location.reload();
		}
	})
	.catch(function(error) {
		alert("Unable to connect to servers. Reloading.");
		location.reload();
	});
};

formButtonEl.on("click", function() {
	if(selectInput.attr("name") === "expertise") {
		submitHandler(selectInput.val());
	}
	else {
		submitHandler(inputTextEl.val());
	}
	reset();
	console.log(trackerObj);
});