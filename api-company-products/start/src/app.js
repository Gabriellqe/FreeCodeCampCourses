import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
const app = express();
// Settings
app.set("port", process.env.PORT || 5000);

// Middlewares
app.use(cors({}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
