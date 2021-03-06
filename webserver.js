// Web server that will host of AngularJS app
var express = require("express");
var app = express();
app.use(express.static("" + __dirname + "/public"));

// Initialize the app
var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function () {
    console.log("Listening on " + server.address().port);
});
