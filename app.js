const express = require('express');
const app = express();
const request = require('request');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('search');
});

app.get('/results', function(req, res){
  request("http://omdbapi.com/?s=iowa&apikey=thewdb", function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render('results', {data: data});
    }
  });
});

app.listen(3000, function(){
  console.log("Serving to port 3000");
});

//&apikey=thewdb
