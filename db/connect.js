//This file is responsible for connecting to the MongoDB database using Mongoose.

const mongoose = require("mongoose");

const connectDB = (url) => {//we import this fn in app.js
  //here we ar resturning a promise
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
