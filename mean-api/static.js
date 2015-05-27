var express = require("express")
var router = express.Router();

router.use(express.static(__dirname + "/static"));

router.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/posts.html")
});

module.exports = router;