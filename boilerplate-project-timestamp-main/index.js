// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/:date?", function (req, res) {
  let date = req.params.date;
  let unixDate;
  let dateObject;
  let utcDate;

  // Test wheter the input date is a number
  let isUnix = /^\d+$/.test(date);

  //If no date specified in params, use the current date
  if (!date) {
    dateObject = new Date();
  }

  // If our input is a unix string we set the unixDate as the input
  else if (date && isUnix) {
    unixDate = parseInt(date);
    dateObject = new Date(unixDate);
  }
  // If the date is not a unix TimeStamp, Othervise we build the Date Object and get the unix time
  else if (date && !isUnix) {
    dateObject = new Date(date);
  }

  if (dateObject.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
    return;
  }

  unixDate = dateObject.getTime();
  utcDate = dateObject.toUTCString();

  res.json({ unix: unixDate, utc: utcDate });
});

// listen for requests :)
var listener = app.listen(5080, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
