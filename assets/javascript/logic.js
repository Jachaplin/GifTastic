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

  var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC"

  var topics = ["Alfa Romeo", "Aston Martin", "Audi", "Bugatti", "Ferrari", "Jaguar", "Lamborghini", "Lotus", "McLaren", "Maserati"]

  	function runQuery(queryURL) {

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);
      // console.log(response.Runtime);
      });
  	}
      // Grabbing and storing the data-animal property value from the button
      
   runQuery(queryURL)



})