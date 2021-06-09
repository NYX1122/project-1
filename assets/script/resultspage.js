// // fetch("https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lon=-112.032997&lat=40.514114", {
// //         "method": "GET",
// //         "headers": {
// //             "x-rapidapi-key": "c6c5ba3134msh910d133557b3135p17ea21jsnc3a6398170be",
// //             "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
// //         }
// //     })
// //     .then(function(response) {
// //         response.json().then(function(data) {
// //             console.log(data);
// //         });
// //     })
// //     .catch(function(error) {
// //         alert("Unable to connect to servers");
// //     })
// //     .then(function(response) {

// //     })

// fetch("https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&radius=25&q-state_cont=utah&q-country_cont=United%20States&limit=10", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "6910575a6amshb6d83ccfb364249p15dc35jsnfee0503ca214",
//             "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
//         }
//     })
//     .then(response => {
//         return response.json

//     })
//     .then(function(response) {
//         console.log(response)
//     })
//     .catch(err => {
//         console.error(err);

// var api = "https://www.freetogame.com/api/games?"
// var platform = "platform="
// var category = "&category="
// var sort = 
// function myFunction() {
//     mode: "no-cors"
//     fetch("https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date")
//     mode: "no-cors"
//         .then(function(userResponse) {
//             return userResponse.json();
//         })
//         .then(function(userResponse) {
//             console.log(userResponse)
//         })
//         .then
// }
// myFunction();



fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date", {
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