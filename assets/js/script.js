// Create a function that pulls a city name 

// query the openweather api for the 5 day forecast

//      a. display function that shows 5 day forecast


//call this function into an .on("click") function
function displayWeatherInfo () {

//var date = $(".dayOfWeek").text(moment().format("dddd"));

var input = "Chicago";
var APIKey = "0246ddd8e1c43f29cf72682d14088ce6";

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + APIKey +"&units=imperial";

$.ajax({

    url: queryURL,
    method: "GET"

}).then(function(response){

    console.log(response);

    //  var f = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    //  var temperature = $(".temperature").text(f.toFixed(0));
    //  var iconCode = response.list[0].weather[0].icon;
    //  var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    //  weatherIcon = $("img").attr('src', iconUrl);

    //for loop that displays 5 day forecast

    
    for(var i = 0; i < 5; i++){

        // temp text
        // weather icon img
        // date / day

        // create a new weather div
        // append day, temp, icon
        // appendTo DOM

        

        
        var temp = response.list[i].main.temp;
        var tempDiv =$("<p>").text(temp).appendTo(newDiv);

        
        var iconCode = response.list[i].weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        var iconDiv = $("<img>").attr('src', iconUrl).appendTo(newDiv);
        
        
        var newDiv = $("<div>").addClass("weatherCard");
        var weather = newDiv.appendTo(".weather");
        


        

    }



})

}

displayWeatherInfo()




// query the google-maps api for location (static map).

//      a. display function that shows the map 

// query NPS api for dog park locations
//      a. filter results for dog parks
//
// display the NPS info onto the page