const mongoose = require("mongoose");
const config = require("./index");


mongoose
  .connect(config.databaseURL)
  .then(() => {
    console.log("Database connected successfullyyyyyyyyyyy");
  })
  .catch((err) => {
    console.error("Database connection error", err);
  });