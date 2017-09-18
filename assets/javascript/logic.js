$(document).ready(function() {

// Public Giphy API Key  dc6zaTOxFJmzC

// -###### Parameters
//  -
//  -+ q - search query term or phrase
//  -+ limit - (optional) number of results to return, maximum 100. Default 25.
//  -+ offset - (optional) results offset, defaults to 0.
//  -+ rating - (optional) limit results to those rated (y,g, pg, pg-13 or r).
//  -+ lang - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported languages [here](#language-support)
//  -+ fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
//  -+ sort - (optional) the sort order of the results returned (recent | relevant)

 // switch the protocol in the query URL from http to https


  var topics = ["Alfa Romeo", "Aston Martin", "Audi", "Bugatti", "Ferrari", "Jaguar", "Lamborghini", "Lotus", "McLaren", "Maserati"]

  	function displayCarGif() {
  	  $("#car-gifs").empty()
  	  var carGif = $(this).attr("data-name")	
  	  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + carGif + "&api_key=dc6zaTOxFJmzC&limit=10&rating"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response)
        console.log(response.data["0"].embed_url)

        for (var i = 0; i < 10; i++) {
        	

          var gifURL = response.data[i].embed_url
          var addCarGif = $("<iframe>")
          addCarGif.attr("src", gifURL)
          addCarGif.attr("alt", "car gif")
          $("#car-gifs").prepend(addCarGif)

        // var carDiv = $("<div class='cars'>")
        }
      
      })
  	}

  	function renderButtons() {
      
      $("#car-buttons").empty()

      topics.forEach(function(car) {
     	// console.log(car)
     	oneCar = $("<button>")
     	oneCar.addClass("cars")
     	oneCar.attr("data-name", car)
     	oneCar.text(car)
     	$("#car-buttons").append(oneCar)
     
     })
  	}

  	$("#add-car").on("click", function(event) {
  		
  		event.preventDefault()
  		var addCar = $("#car-input").val().trim()
  		topics.push(addCar)
  		renderButtons()
  		$("#car-input").val("")
  	})
  $(document).on("click", ".cars", displayCarGif)   
  renderButtons()  
  // displayCarGif()




})