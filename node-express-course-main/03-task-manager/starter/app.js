const express = require("express");
const app = express();
const tasks = require("./routes/task");
const port = process.env.PORT || 5000;
const connectDB = require("./db/connect.js");
const bodyParser = require("body-parser");
require("dotenv").config();


// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/v1/tasks", tasks);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
