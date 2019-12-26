
var express = require("express");
var app = express();
var request = require("request");
var favicon = require("serve-favicon");
var haiku = require("./haiku");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(favicon(__dirname + '/public/images/favicon.ico'));


app.get("/", function(req, res){
  res.send("hey");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started.");
});
