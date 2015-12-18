//this file will handle all the api calls

//our main API call function
function apiCall(method, url, callback, target){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
      if(xmlhttp.status == 200){
        var response = JSON.parse(xmlhttp.responseText)
        console.log(response)
        callback(response, target);
      }
      else if(xmlhttp.status == 400) {
        console.log('There was an error 400')
      }
      else {
        console.log('something else other than 200 was returned')
      }
    }
  }
  //xmlhttp.open(method, url, async-boolean)
  //note that the ?s= gives us a search
  xmlhttp.open(method, url, true);
  xmlhttp.send();
}

//this function makes the GET request to omdb and generates the list of movies
function omdbCall(searchValue, output){
  var method = "GET"
  var searchLink = "http://www.omdbapi.com/?s="+searchValue+"&y=&plot=full&r=json"
  apiCall(method, searchLink, generateMovieList, output)
}

//this function makes a call for the movie specifically
function movieCall(movieLink, target){
  var method = "GET"
  apiCall(method, movieLink, generateMovieInfo, target)
}

function getFavorites(output){
  var method = "GET"
  apiCall(method, "/favorites", generateMovieList, output)
}
