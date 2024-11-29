const mongoose = require("mongoose");
const config = require(".");

mongoose
  .connect(config.databaseURL)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => console.error("database connection failed", err));