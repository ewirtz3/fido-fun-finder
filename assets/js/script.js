//onClick function attached to sunshineBtn, takes in user's city input and queries Open Weather API for that city's 5-day forecast, appends it to #sunshine div
$("#sunshineBtn").on("click", function (event) {
  event.preventDefault();
  var input = $(".input").val();
  var APIKey = "0246ddd8e1c43f29cf72682d14088ce6";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    input +
    "&appid=" +
    APIKey +
    "&units=imperial";

  if (input === "") {
    alert("please enter a city");
  } else {
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var city = $("#city").text(input);

      for (i = 7; i < response.list.length; i += 8) {
        var newDiv = $("<div>").addClass("weatherCard").appendTo(".fiveDay");

        var futureDate = $("<h5>")
          .text(moment.unix(response.list[i].dt).format("M/D/YYYY"))
          .appendTo(newDiv);

        var tempDiv = $("<p>")
          .html("<span>" + response.list[i].main.temp + " &deg;F" + "</span>")
          .appendTo(newDiv);

        var iconCode = response.list[i].weather[0].icon;
        var iconUrl =
          "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        var iconDiv = $("<img>").attr("src", iconUrl).appendTo(newDiv);
      }
    });

    $("#frontPage").removeClass("is-active");
    $("#nature").removeClass("is-hidden");
  }
});

//in case the weather forecast isn't great, we want the user to have the option to switch lanes and get a random drink recipe. Declaring variable attached to the badWeatherBtn, which will have the same affect as the user having originally chosen spirits over sunshine
var badWeatherBtn = $("#bad-weather-button");
$(badWeatherBtn).on("click", function (event) {
  event.preventDefault();
  $("#nature").addClass("is-hidden");
  $("#drinks").removeClass("is-hidden");
  renderDrinks();
});

//renderDrinks function queries thecocktaildb API for a random cocktail, returns name, image, ingredients, measurements, and instructions to create a random cocktail
function renderDrinks() {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    var drinkName = $("<h3>")
      .text(response.drinks[0].strDrink)
      .appendTo("#nameAndPic");
    var drinkImage = $("<img>")
      .attr("src", response.drinks[0].strDrinkThumb)
      .appendTo("#nameAndPic");
    var ingSection = $("<h5>")
      .text("Ingredients: ")
      .appendTo("#listOfIngredients");

    var ingredients = [
      response.drinks[0].strIngredient1,
      response.drinks[0].strIngredient2,
      response.drinks[0].strIngredient3,
      response.drinks[0].strIngredient4,
      response.drinks[0].strIngredient5,
      response.drinks[0].strIngredient6,
      response.drinks[0].strIngredient7,
      response.drinks[0].strIngredient8,
      response.drinks[0].strIngredient9,
      response.drinks[0].strIngredient10,
      response.drinks[0].strIngredient11,
      response.drinks[0].strIngredient12,
      response.drinks[0].strIngredient13,
      response.drinks[0].strIngredient14,
      response.drinks[0].strIngredient15,
    ];

    var newArray = ingredients.filter(function (noNull) {
      return noNull != null;
    });

    var measurements = [
      response.drinks[0].strMeasure1,
      response.drinks[0].strMeasure2,
      response.drinks[0].strMeasure3,
      response.drinks[0].strMeasure4,
      response.drinks[0].strMeasure5,
      response.drinks[0].strMeasure6,
      response.drinks[0].strMeasure7,
      response.drinks[0].strMeasure8,
      response.drinks[0].strMeasure9,
      response.drinks[0].strMeasure10,
      response.drinks[0].strMeasure11,
      response.drinks[0].strMeasure12,
      response.drinks[0].strMeasure13,
      response.drinks[0].strMeasure14,
      response.drinks[0].strMeasure15,
    ];

    var measureArray = measurements.filter(function (noNull) {
      return noNull != null;
    });

    for (i = 0; i < newArray.length; i++) {
      var ingredientList = $("<ul>").appendTo("#listOfIngredients");
      var newIngredients = $("<li>")
        .text(measureArray[i] + ": " + newArray[i])
        .appendTo(ingredientList);
    }

    var insrSection = $("<h5>").text("Instructions").appendTo("#howTo");
    var mix = $("<p>")
      .text(response.drinks[0].strInstructions)
      .appendTo("#howTo");
  });
}

//button if user wants another random drink
$("#hit-me-again").on("click", function (event) {
  event.preventDefault;
  $("#nameAndPic").html("");
  $("#listOfIngredients").html("");
  $("#howTo").html("");
  renderDrinks();
});

//onClick event attached to spiritsBtn, clears HTML and renders a new random drink
$("#spiritsBtn").on("click", function (event) {
  event.preventDefault();
  renderDrinks();
  $("#frontPage").removeClass("is-active");
  $("#drinks").removeClass("is-hidden");
});
