// The API url and the city we want to check...
var url = "http://api.openweathermap.org/data/2.5/weather?callback=?";

// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
$.getJSON(url, {}, function(data)
{

	console.log(data);

});
