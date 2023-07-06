import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World 2!");
});

export default app;
