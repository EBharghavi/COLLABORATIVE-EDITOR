var express = require('express');
var bodyParser = require('body-parser');
var Pusher = require('pusher');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// to serve our JavaScript, CSS and index.html
app.use(express.static('./'));

// Initialize Pusher with correct syntax (use ":" instead of "=")
var pusher = new Pusher({
  appId: "1930007",
  key: "5f8f37e07e839c5b1ba0",
  secret: "04c945c40d68fdb4dd7e",
  cluster: "ap2"
});

app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

var port = process.env.PORT || 5001;
app.listen(port, () => console.log('Listening at http://localhost:5001'));
var port = process.env.PORT || 5002;  // Port 5002
app.listen(port, () => console.log('Listening at http://localhost:5002'));
