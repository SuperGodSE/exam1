var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! this is the first edit\n');
});

app.get('/fakyou'. function(req, res){
  req.send('this is a readiness probe - fakkkkkkkkk you\n');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
