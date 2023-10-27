const mongoose = require("mongoose");
require("dotenv").config();
// connection with mongoose
mongoose
  .connect(
    process.env.NODE_ENV == "production"
      ? process.env.MONGO_URI
      : "mongodb://localhost/xLinksPro"
  )
  // .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.error("Database connection failed : ", err));
