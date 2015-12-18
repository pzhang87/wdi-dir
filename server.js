var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser'); //was missing

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true })) //does this need to be true?
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public'))); //missing parens

// this is the route for favorites, but we aren't using it here
app.get('/favorites', function(req, res){
  var data = fs.readFileSync('./data.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}); //missing bracket + parens

app.post('/favorites', function(req, res){//shouldn't this be a post request?
  if (!req.body.Title || !req.body.imdbID){
    console.log(req.body)
    res.send("Error");
    return;
  } //missing bracket

    // this pushes the retrieved data from the front-end into the json file serving as the back-end
    var data = JSON.parse(fs.readFileSync('./data.json'));
    data.push(req.body);
    fs.writeFile('./data.json', JSON.stringify(data));
    res.setHeader('Content-Type', 'application/json');
    // we don't actually want this to send data in the response, but maybe a redirect to the root works for now
    res.redirect('/');
  });

app.listen(4000, function(){ //corrected to app.listen(), changed to 4000 temporarily
  console.log("Listening on port 4000");
});
