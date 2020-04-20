


$("#sunshineBtn").on("click", function (event) {
    event.preventDefault();

    //var date = $(".dayOfWeek").text(moment().format("dddd"));

    var input = "Chicago";
    var APIKey = "0246ddd8e1c43f29cf72682d14088ce6";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + APIKey + "&units=imperial";

    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function (response) {

        console.log(response)

        for (i = 7; i < response.list.length; i += 8) {

           

            var newDiv = $("<div>").addClass("weatherCard");
            var weather = newDiv.appendTo("#sunshine");

            var futureDate = $("<h5>" + moment.unix(response.list[i].dt).format("M/D/YYYY") + "</h5>").appendTo(newDiv);

            var temp = response.list[i].main.temp;
            var tempDiv = $("<p>").text(temp).appendTo(newDiv);


            var iconCode = response.list[i].weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            var iconDiv = $("<img>").attr('src', iconUrl).appendTo(newDiv);


            
        }
    })

    $("#frontPage").removeClass("is-active");
})









$(".is-primary").on("click", function (event) {

    event.preventDefault();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
            console.log(response.drinks[0]);

            var newDrink = $("<div>").addClass("newDrinkInfo").appendTo("#spirits");
            var drinkName = $("<h3>").text(response.drinks[0].strDrink).appendTo(newDrink);
            var drinkImage = $("<img>").attr("src", response.drinks[0].strDrinkThumb).appendTo(newDrink);
            
        
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
                            response.drinks[0].strIngredient15
                        ];
                        
                        console.log(ingredients);
                        console.log(ingredients.length);
            
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

            })

            for (i = 0; i < newArray.length; i++) {
            
                console.log(newArray);
                ingredientList = $("<ul>").addClass("drinkList").appendTo(newDrink)
                var newIngredients = $("<li>").text(measureArray[i] + ": " + newArray[i]).appendTo(".drinkList");

            }

            var mix = $("<p>").text(response.drinks[0].strInstructions).appendTo(newDrink);
            
        
    })

    $("#frontPage").removeClass("is-active");
})



