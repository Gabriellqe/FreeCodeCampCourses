import app from "./app.js";
import "./database.js";
import "./libs/initialSetups.js";
import { PORT } from "./config.js";

app.listen(PORT);
console.log("Server on port", app.get("port"));
