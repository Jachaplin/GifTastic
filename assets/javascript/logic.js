$(document).ready(function() {
// Public Giphy API Key  dc6zaTOxFJmzC
// switch the protocol in the query URL from http to https


// Default buttons
  var topics = ["Alfa Romeo", "Aston Martin", "Audi", "Bugatti", "Ferrari", "Jaguar", "Lamborghini", "Lotus", "McLaren", "Maserati"]

// makes request to giphy and displays 10 giffs or images when button is pressed
  	function displayCarGif() {
  	  
      $("#car-gifs").empty()
  	  var cars = $(this).attr("data-name")	
  	  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cars + "&api_key=dc6zaTOxFJmzC&limit=10"

// ajax get request
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {

        var results = response.data

        // Looping through the get request results
        for (var i = 0; i < 10; i++) {
          
          // images of the 10 results
          var imageURL = results[i].images.original_still.url
          
          // gifs of the 10 results
          var gifURL = results[i].images.downsized.url
                   
          // ratings of the 10 results
          var rating = results[i].rating
          
          // image tag to hold the results
          var carImgTag = $("<img>")

          // adding attr to the image results
          carImgTag.attr("src", imageURL)
          
          carImgTag.attr("data-still", imageURL)

          carImgTag.attr("data-animate", gifURL)

          var currentState = carImgTag.attr("data-state", "still")
          
          carImgTag.addClass("gif")
          
          var p = $("<p>").text("Rating: " + rating)
          
          var carDiv = $("<div>")

          carImgTag.append(currentState)
          carDiv.append(carImgTag)
          carDiv.append(p)
          
          $("#car-gifs").prepend(carDiv)
           
        }
      })
    }

    function renderButtons() {
      
      $("#car-buttons").empty()

      topics.forEach(function(car) {
      
        oneCar = $("<button>")
        oneCar.addClass("car-button-class")
        oneCar.attr("data-name", car)
        oneCar.text(car)
        $("#car-buttons").append(oneCar)
     
     })
    }
          $("body").on("click", ".gif", function() {
   
            if ($(this).attr("data-state") === "still") {
    
                $(this).attr("src", $(this).attr("data-animate"))
                $(this).attr("data-state", "animate")
            }
            else {
                $(this).attr("data-state", "still")
                $(this).attr("src", $(this).attr("data-still"))
            }
        })

  	$("#add-car").on("click", function(event) {
  		
  		event.preventDefault()
  		var addCar = $("#car-input").val().trim()
  		topics.push(addCar)
  		renderButtons()
  		$("#car-input").val("")
  	})
  
  $(document).on("click", ".car-button-class", displayCarGif)   
  renderButtons()  

})
