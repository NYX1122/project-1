function myFunction() {
    fetch("https://www.benbrougher.tech/hiker/v1/trails/")
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response.data[0]);
            var response
        })
}