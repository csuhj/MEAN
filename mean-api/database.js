var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mean", function() {
    console.log("mongodb connected");
});

module.exports = mongoose;