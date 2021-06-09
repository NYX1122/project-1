var category = document.getElementById("options").value
var platform = document.getElementById("platfom").value
var sort = document.getElementById("sort").value




var api = "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all"
var platformApi = "platform="
var categoryApi = "&category="
var sortApi = "&sort-by="



document.getElementById("pc").addEventListener("click", myFunction)
document.getElementById("hikeSubmit").addEventListener("click", myFunction);
document.getElementById("options").addEventListener("click", myFunction)

function myFunction() {
    category = document.getElementById("shooter").value
    platform = document.getElementById("pc").value
    sort = document.getElementById("search").value


    fetch(api +
            // platformApi +
            // "platform" +
            categoryApi +
            "category" +
            sortApi +
            "sort", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "6910575a6amshb6d83ccfb364249p15dc35jsnfee0503ca214",
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
                }
            })
        .then(function(response) {
            return response.json();

        })
        .then(response => {
            console.log(response);
        })
        .then(function(response) {

        })

}