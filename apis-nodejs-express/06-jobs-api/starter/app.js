require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const morgan = require("morgan");

//connect DB
const connectDB = require("./db/connect");
const authenticatedUser = require("./middleware/authentication");
//Routers
const jobsRouter = require("./routes/jobs");
const authRouter = require("./routes/auth");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(morgan("dev"));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticatedUser, jobsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
