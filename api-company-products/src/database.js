import mongoose from "mongoose";
//import { MONGODB_URI } from "./config.js";
const connectDB = async (url) => {
  try {
    const db = await mongoose.connect(url);
    console.log("Database is connected to", db.connection.name);
  } catch (error) {
    console.error(error.message);
  }
};

connectDB(process.env.MONGO_URI);

export default connectDB;
