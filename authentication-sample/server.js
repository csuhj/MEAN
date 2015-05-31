var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("jwt-simple");
var _ = require("lodash");

var app = express();
app.use(bodyParser.json());

var users = [{username: 'csuhj', password: 'pass'}];
var secretKey = "OpenSesame";

function findUserByUsername(username) {
    return _.find(users, {username: username});
}

function validateUser(user, password) {
    return user.password === password;
}

app.post('/session', function(req, res) {
    var user = findUserByUsername(req.body.username);
    if (!validateUser(user, req.body.password)) {
        return res.send(401); //Unauthorized
    }

    var token = jwt.encode({username: user.username}, secretKey);
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