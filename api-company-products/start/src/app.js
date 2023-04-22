import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

// Routes
import indexRoutes from "./routes/index.routes.js";
import productRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
// Settings
app.set("port", process.env.PORT || 5000);

// Middlewares
app.use(cors({}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoutes);

export default app;
