import app from "./app.js";

app.listen(5000);
console.log("Server on port", app.get("port"));
