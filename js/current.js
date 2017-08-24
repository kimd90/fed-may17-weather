// The API url and the city we want to check...
var url = "http://api.openweathermap.org/data/2.5/weather?callback=?";
var id = "4db0d9f7d133322df1dfb1349970f4b6"
var city = "Toronto"
var unit = "metric"

// $.getJSON(url, {'q': city, 'units': unit, 'APPID': id}, function(data)
// {
//
// 	console.log(data);
// 	console.log(data.main.temp);
//
// 	var curr = Math.round(data.main.temp);
// 	var high = Math.round(data.main.temp_max);
// 	var low = Math.round(data.main.temp_min);
//
// 	$('#city').text(data.name)
// 	$('.curr').html(curr + "&deg;C");
// 	$('.high').html(high + "&deg;C");
// 	$('.low').html(low + "&deg;C");
// });

$('.submit').click(function() {
	var city = $('.citysearch').val()

	// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
	$.getJSON(url, {'q': city, 'units': unit, 'APPID': id}, function(data) {
		console.log(data);
		console.log(data.main.temp);

		var curr = Math.round(data.main.temp);
		var high = Math.round(data.main.temp_max);
		var low = Math.round(data.main.temp_min);

		$('#city').text(data.name)
		$('.curr').html(curr + "&deg;C");
		$('.high').html(high + "&deg;C");
		$('.low').html(low + "&deg;C");

		if (curr >= 40) { curr_col = 40 }
		else if (curr <= -40) { curr_col = -40 }
		else {curr_col = curr}
		
		var tempindex = (120 - (3 * curr_col))
		var colorchange = 'hsla(' + tempindex + ', 100%, 50%, 0.87)'
		$('body').css({'background-color':colorchange})
	});
});

$('.citysearch').keypress(function(e) {
	if (e.which == 13) {
		e.preventDefault();
		$('.submit').click();
	}
});
