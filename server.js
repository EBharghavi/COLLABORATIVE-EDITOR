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
  appId: "ENTER_YOUR_ID",
  key: "ENTER_YOUR_KEY",
  secret: "ENTER_YOUR_SECRET",
  cluster: "ENTER_YOUR_CLUSTER"
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
