import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  });

const db = mongoose.connection;
db.once("open", () => console.log("DB Connection Success!"));
db.on("error", () => console.log(`DB Connection Fail: error on db connection:${error}`));