import express, { NextFunction } from "express";
import { ErrorRequestHandler } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res, next) => {
  try {
    res.send("Hello World 2!");
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

const errorHandler: ErrorRequestHandler = (error, req, res) => {
  console.error(error);
  const errorMessage = "An unknown error occurred";
  const statusCode = 500;
  // Resto del código...
  res.status(statusCode).json({ error: errorMessage });
};

app.use(errorHandler);

export default app;
