//this file will generate the movie view

function generateMovieList(response, output){
  output.innerHTML = ""
  var movies = [];
    if (response.Search) {
      movies = response.Search
    }
    else {
      movies = response
    };

  for (var i = 0; i < movies.length; i++){
    var movie = movies[i]
    output.innerHTML +=
    "<p><div class='movie'>"+ movie.Title + "</p>"+
    "<form action='https://www.omdbapi.com/?i="+movie.imdbID+"&plot=full&r=json' method='get'>"+
    "<input class='getInfo' type='submit' value='Info'></form>"+
    "<form action='/favorites' method='post'>"+
    "<input type='hidden' name='Title' value='"+movie.Title+"'>"+
    "<input type='hidden' name='imdbID' value='"+movie.imdbID+"'>"+
    "<input class='addFavorites' type='submit' value='Favorite'></form></div>"
  }
}

function generateMovieInfo(response, target){
  console.log(target)
  target.innerHTML =
  "<div class='movie-info'><ul>"+
    "<li><b>Year:</b> "+response.Year+"</li>"+
    "<li><img src='"+response.Poster+"'></li>"+
    "<li><b>Actors:</b> "+response.Actors+"</li>"+
    "<li><b>Plot Summary:</b> "+response.Plot+"</li>"+
  "</ul></div>"
}
