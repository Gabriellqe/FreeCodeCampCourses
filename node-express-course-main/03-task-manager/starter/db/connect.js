const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://admin:Betel279@cluster0.gsjkuo2.mongodb.net/03-Task-Manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {console.log("Connected to MongoDB");})
  .catch((err) => console.log(err));
