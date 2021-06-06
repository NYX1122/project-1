var api = "http://api.amp.active.com/camping/campsites?"
var apiKey = "tu627n99ahbtf6uyggdudbt9"
var apiQuery = "rvSites"

function myFunction() {
    fetch(
            api +
            apiQuery +
            apiKey
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
        })

}
myFunction();