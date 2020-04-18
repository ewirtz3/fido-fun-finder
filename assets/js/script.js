
function displayWeatherInfo() {

    //var date = $(".dayOfWeek").text(moment().format("dddd"));

    var input = "Chicago";
    var APIKey = "0246ddd8e1c43f29cf72682d14088ce6";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + APIKey + "&units=imperial";

    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function (response) {

        console.log(response)

        for (var i = 0; i < 5; i++) {

            var temp = response.list[i].main.temp;
            var tempDiv = $("<p>").text(temp).appendTo(newDiv);


            var iconCode = response.list[i].weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            var iconDiv = $("<img>").attr('src', iconUrl).appendTo(newDiv);


            var newDiv = $("<div>").addClass("weatherCard");
            var weather = newDiv.appendTo(".weather");
        }
    })

}

displayWeatherInfo();





function getDrinks () {

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response.drinks[0]);

        var newDrink = $("<div>").addClass(".newDrinkInfo").appendTo("body");
        var drinkName = $("<h3>").text(response.drinks[0].strDrink).appendTo(newDrink);

        var drinkImage = $("<img>").attr("src", response.drinks[0].strDrinkThumb).appendTo(newDrink);

        for (var i = 1; i < 16; i++){

            var ingredients = $("<h5>").addClass("ingredient")

        }
        


    })
}

getDrinks();
