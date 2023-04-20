const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// Basic Configuration
app.use("/", bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("public"));

//Model

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
});
const userModel = mongoose.model("user", userSchema);

const exerciseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: new Date() },
});
const exerciseModel = mongoose.model("exercise", exerciseSchema);

//Routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/users", async (req, res) => {
  try {
    const allUser = await userModel.find({});
    res.json(allUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/api/users", async (req, res) => {
  let username = req.body.username;
  try {
    let newUser = userModel({ username: username });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({ error: "Cant save in DB" });
  }
});

app.post("/api/users/:_id/exercises", async (req, res) => {
  let userId = req.params._id;

  exerciseObj = {
    userId: userId,
    description: req.body.description,
    duration: req.body.duration,
  };

  // If there is a date add it to the object
  if (req.body.date != "") {
    exerciseObj.date = req.body.date;
  }

  let newExercise = new exerciseModel(exerciseObj);

  let userFound = await userModel.findById(userId);
  newExercise.save();
  res.json({
    username: userFound.username,
    description: newExercise.description,
    duration: newExercise.duration,
    date: new Date(newExercise.date).toDateString(),
    _id: userFound._id,
  });
});

app.get("/api/users/:_id/logs", async (req, res) => {
  let fromParam = req.query.from;
  let toParam = req.query.to;
  let limitParam = req.query.limit;
  let userId = req.params._id;

  // If limit param exists set it to an integer
  limitParam = limitParam ? parseInt(limitParam) : limitParam;

  let userFound = await userModel.findById(userId);
  let username = userFound.username;

  let queryObj = {
    userId: userId,
  };
  // If we have a date add date params to the query
  if (fromParam || toParam) {
    queryObj.date = {};
    if (fromParam) {
      queryObj.date["$gte"] = fromParam;
    }
    if (toParam) {
      queryObj.date["$lte"] = toParam;
    }
  }

  exerciseModel
    .find(queryObj)
    .limit(limitParam)
    .then((exercise) => {
      let responseObj = { _idUser: userFound._id, username: username };

      exercise = exercise.map((x) => {
        return {
          description: x.description,
          duration: x.duration,
          date: new Date(x.date).toDateString(),
        };
      });

      responseObj.log = exercise;
      responseObj.count = exercise.length;
      res.json(responseObj);
    });
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
