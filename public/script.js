//this file will give behavior to the index view

//these first few lines require that the document loads before running this script
document.onreadystatechange = function(){
  if (document.readyState == "complete") {
   console.log('ready!')
  }

  var submit = document.getElementById("submit")
  var search = document.getElementById("search")
  var output = document.querySelector(".output")
  var favorites= document.getElementById("favorites")

 //this adds an event listener to the button which makes the ajax call to OMDB
  submit.addEventListener("click", function(event){
     //these lines stop the page from refreshing on click, and deal with the issue
     //where api is called twice
    event.preventDefault();
    event.stopImmediatePropagation();
    if (search.value){
      omdbCall(search.value, output);
    }
  })
  //this adds an event listener to the output section of the body and makes an API
  //call if the clicked object is the button
  output.addEventListener("click", function(event){
    //adds event listener to getInfo button and preps API call
    if (event.target.className == "getInfo"){
      event.preventDefault();
      event.stopImmediatePropagation();
      movieLink = event.target.parentNode.getAttribute("action")
      movieCall(movieLink, event.target.parentNode)
    }
  })

  favorites.addEventListener("click", function(){
    event.preventDefault();
    event.stopImmediatePropagation();
    getFavorites(output);

  })
 }
