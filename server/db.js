const mongoose = require("mongoose");

var dbURL =
  "mongodb+srv://Vibhash:mJNnFj5COes7Lx0y@cluster0.p6csj.mongodb.net/foodizone";

mongoose.connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongo DB connected Successfully`);
});

db.on("error", () => {
  console.log(`Mongo DB connection failed`);
});

module.exports = mongoose;
