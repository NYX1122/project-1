var api = "http://api.amp.active.com/camping/campsites?"
var apiKey = "tu627n99ahbtf6uyggdudbt9"
var apiQuery = ""

function myFunction() {
    fetch(
            api +
            apiKey
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
        })

}