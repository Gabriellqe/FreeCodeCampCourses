require("./db/connect.js")
const express = require("express");
const app = express();
const tasks = require("./routes/task");
const port = process.env.PORT || 5000;


// Middleware
app.use("/api/v1/tasks", tasks);

// Routes


app.listen(port, console.log(`Listening on port ${port}`));
