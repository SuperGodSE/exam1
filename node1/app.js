var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World  test  1  2 3 - link apppppp ! this is after adding health and ready probes\n');
});

app.get('/ready', function(req, res) {
  res.send('this is a readiness probe - fakkkkkkkkk you\n');
});


app.get('/healthz', function(req, res) {
  res.send('this is a healthy probe - I am healthy hahahahahahahahahaha \n');
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
