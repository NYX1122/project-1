var category = document.getElementById("options").value

var sort = document.getElementById("sort").value




var api = "https://free-to-play-games-database.p.rapidapi.com/api/games?"
var platformApi = "platform="
var categoryApi = "&category="
var sortApi = "&sort-by="



document.getElementById("platfom").addEventListener("click", myFunction)
document.getElementById("hikeSubmit").addEventListener("click", myFunction)
document.getElementById("options").checked
    // .addEventListener("click", myFunction)
var pc = document.getElementById("pc").value;
var browser = document.getElementById("browser").checked;
var all = document.getElementById("all").checked;
var platform =



    function platfomVal() {
        pc = document.getElementById("pc").value
        browser = document.getElementById("browser").value
        all = document.getElementById("all").value
        platform(pc + browser + all).push
    }






function myFunction() {
    category = document.getElementById("shooter").value
    platform = document.getElementById("platfom").value
    sort = document.getElementById("search").value


    fetch(api +
            platformApi +
            platform +
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