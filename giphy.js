// on page load, search for & display a random gif matching your search term using the Giphy API.
// usage:
//   include giphy.js in your <head>
//   set q to your search term (e.g. "brunch")
//   add <span id = "giphyme"></span> wherever you want to display the image. -- FYI, it will be centered.
// big ups to the Giphy crew (giphy.com)
// 2014 - Neal Shyam [@nealrs | nealshyam.com]


// document.addEventListener('DOMContentLoaded', getGif());


function getGif() {
	// var search= prompt("Enter a theme for a new GIF!");
	var search = document.getElementById("search-box").value
	//sets bar to an empty string
	document.getElementById("search-box").value = ""
	q = search; // search query

	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText);
			console.log(data);
			document.getElementById("giphyme").innerHTML = '<center><img src = "'+data.data.images.fixed_width.url+'"  title="GIF via Giphy" width="400"></center>';
			document.getElementById("title").innerHTML = '<center><h2>Title of GIF: ' + data.data.title + '</h2></center>';

			console.log(data.data.title)

		} else {
			console.log('reached giphy, but API returned an error');
		}
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
}


document.addEventListener("DOMContentLoaded", function() {
	var input = document.getElementById("search-box");
	input.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			getGif()

		}
	});





});
