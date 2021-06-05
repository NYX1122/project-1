
fetch("https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&radius=25&q-state_cont=California&q-country_cont=Australia&q-city_cont=Denver&limit=10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c7775c3c57mshc8f454db83cbe91p1279fejsn022ef1c7154c",
		"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});