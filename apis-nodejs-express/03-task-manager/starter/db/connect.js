const mongoose = require("mongoose");

const connectDB = (URL) => {
  return mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB;
