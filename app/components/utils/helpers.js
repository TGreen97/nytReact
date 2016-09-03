// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');
// Authentication Key to search NYT db
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// Geocoder API
// var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
// NYT Query URL
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var queryTerm   = "";
var numResults  = 0;
var startYear   = 0;
var endYear   = 0;
// Array to hold the various article info
var articleCounter = 0;
// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query to Search.
	runQuery: function(queryTerm){

		console.log(queryTerm);

		//Figure out the geolocation
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
		})

	},

	// This function hits our own server to retrieve the record of query results
	getSearch: function(){

		return axios.get('/api/saved')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// This function posts new searches to our database.
	postSearch: function(queryTerm){

		return axios.post('/api/saved', {queryTerm: queryTerm})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}


// We export the helpers function
module.exports = helpers;