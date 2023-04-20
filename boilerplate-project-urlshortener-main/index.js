require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dns = require("node:dns");
// Basic Configuration
const port = process.env.PORT || 3000;

app.use("/", bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/public", express.static(`${process.cwd()}/public`));

const URLSchema = new mongoose.Schema({
  original_url: { type: String, required: true, unique: true },
  short_url: { type: String, required: true, unique: true },
});

let URLModel = mongoose.model("url", URLSchema);

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/shorturl/:short_url", function (req, res) {
  let short_url = req.params.short_url;
  //Find the original URL front DB
  URLModel.findOne({ short_url: short_url }).then((foundURL) => {
    if (foundURL) {
      let original_url = foundURL.original_url;
      res.redirect(original_url);
    } else {
      res.json({ error: "The short url does not exist" });
    }
  });
});

app.post("/api/shorturl", function (req, res) {
  let url = req.body.url;
  try {
    urlObj = new URL(url);
    dns.lookup(urlObj.hostname, async (err, address, family) => {
      //If no address is returned then the DNS dont exist
      if (!address) {
        res.json({ error: "invalid url" });
      }
      // Otherwise we hava a valid URL
      else {
        //Check that URL does not already exist in the DB
        let original_url = urlObj.href;
        URLModel.findOne({ original_url: original_url }).then((foundURL) => {
          if (foundURL) {
            res.json({
              original_url: foundURL.original_url,
              short_url: foundURL.short_url,
            });
          }

          // If url doesnt exist then add to db
          else {
            let short_url = 1;
            //get the latest number shorturl
            URLModel.find({})
              .sort({ short_url: "desc" })
              .limit(1)
              .then(async (lastestURL) => {
                if (lastestURL.length > 0) {
                  short_url = parseInt(lastestURL[0].short_url) + 1;
                }
                let resObj = {
                  original_url: original_url,
                  short_url: short_url,
                };

                // Create a new object in mongodb
                try {
                  let newURL = new URLModel(resObj);
                  await newURL.save();
                  res.json(resObj);
                } catch (error) {
                  res.status(200).json({ error: "Cant save in DB" });
                }
              });
          }
        });
      }
    });
  } catch (error) {
    res.json({ error: "catch error" });
  }
});

const connectDB = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url);
};

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
