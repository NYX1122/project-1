var apiKey = "c7775c3c57mshc8f454db83cbe91p1279fejsn022ef1c7154c";
var apiHost = "trailapi-trailapi.p.rapidapi.com";

function myFuntion() {
    fetch("https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&radius=25&q-state_cont=California&q-country_cont=Australia&q-city_cont=Denver&limit=10" +
            apiKey +
            apiHost

        )
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response.data)
        })




}
myFuntion()