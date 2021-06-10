var inputTextEl = $("#input-text");
var questionEl = $("#more-info-page-title");
var formWrapperEl = $("#form-holder");
var selectInput = $("<select>");
var questionsArr = ["What is your name?", "What is your address / city?", "What is your maximum travel distance in miles?", "What is your experience level?", "What day would you like to go biking?"];
var locationData = ""
var trackerObj = {name: "", address: "", range: "", expertise: "", date: ""};

var submitHandler = function(string) {
	console.log(string);
	if (inputTextEl.attr("placeholder") === "name") {
		trackerObj.name = string;
	}
	if (inputTextEl.attr("placeholder") === "address") {
		trackerObj.address = string;
		if(string === ""){
			alert("Please enter a city name.");
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
	if (inputTextEl.attr("placeholder") === "date") {
		trackerObj.date = string;
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
	}
	else if (selectInput.attr("name") === "expertise") {
		questionEl.text(questionsArr[4]);
		selectInput.attr("name", "");
		selectInput.detach();
		$("#next-question").before(inputTextEl);
		$("#next-question").text("Get Results");
		inputTextEl.attr("placeholder", "date");
		inputTextEl.datepicker({
			minDate: 1,
			onClose: function() {
			}
		});
	}
	else if (inputTextEl.attr("placeholder") === "date") {
		location.replace("./ResultsPage.html");
	}
};

var addressSubmitHandler = function(address) {
    var geocodeApi = "http://api.positionstack.com/v1/forward?access_key=6a0a7bfe7991fb3b771c2cfee43f426b&query=";
    var fetchGeocodeUrl = geocodeApi + address;
	fetch(fetchGeocodeUrl).then(function(response) {
		if (response.ok) {
			response.json().then(function(data) {
				locationData = data;
			});
		}
		else {
			alert("City not found. Reloading.");
			location.reload();
		}
	})
	.catch(function(error) {
		alert("Unable to connect to servers. Reloading.");
		location.reload();
	});
};

$("#next-question").on("click", function() {
	if(selectInput.attr("name") === "expertise") {
		submitHandler(selectInput.val());
	}
	else {
		submitHandler(inputTextEl.val());
	}
	reset();
	console.log(trackerObj);
});