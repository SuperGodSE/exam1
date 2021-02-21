var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! this is the first edit\n');
});

app.get('/ready1'. function(req, res){
  req.send('this is a readiness probe - fakkkkkkkkk you\n');
});


app.get('/healthy1'. function(req, res){
  req.send('this is a healthy probe - I am healthy hahahahahahahahahaha \n');
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
