var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("jwt-simple");

var app = express();
app.use(bodyParser.json());

var secretKey = "OpenSesame";

app.post('/session', function(req, res) {
    var username = req.body.username
    //TODO: Validate password

    var token = jwt.encode({username: username}, secretKey);
    res.json(token);
});

app.get('/user', function(req, res) {
    var token = req.headers['x-auth'];
    var user = jwt.decode(token, secretKey);

    //TODO: Pull user info from database
    res.json(user);
});


app.listen(8080, function() {
    console.log("server listening on", 8080);
});