require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dns = require("node:dns");
// Basic Configuration
const port = process.env.PORT || 3000;

const connectDB = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url);
};

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
app.post("/api/shorturl", function (req, res) {
  let url = req.body.url;
  try {
    urlObj = new URL(url);
    dns.lookup(urlObj.hostname, async (err, address, family) => {
      //If no address is returned then the DNS dont exist
      if (!address) {
        res.json({ error: "invalid url" });
      } else {
        let original_url = urlObj.href;
        let resObj = { original_url: original_url, short_url: 3 };
        try {
          let newURL = new URLModel(resObj);
          await newURL.save();
          res.json(resObj);
        } catch (error) {
          res.status(200).json({ error: "Cant save in DB" });
        }
      }
    });
  } catch (error) {
    res.json({ error: "catch error" });
  }
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
