const express = require("express");
const Meal = require("./models/mealModel");

const app = express();
const db = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working ");
});

app.get("/getmeals", (req, res) => {
  Meal.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port ${port}`);
