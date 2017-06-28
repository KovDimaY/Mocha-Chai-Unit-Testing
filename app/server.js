var express = require("express");
var app = express();

app.get("/testConnection", function(req, res) {
  var status = parseInt(req.query.status, 10);
  var param = req.query.status;
  console.log(status);
  console.log((status < 100));
  console.log((status > 1000));
  if (isNaN(status) || status < 100 || status > 1000) {
    res.status(400).send("Your parameter was: " + param);
  } else {
    res.status(status).send("Your parameter was: " + param);
  }

});


app.listen(3000);
