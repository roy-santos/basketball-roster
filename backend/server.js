import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// mongo connection
mongoose.connect("mongodb://localhost/basketballRosterDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// body-parser setup (transpile request to something that mongoDB will understand)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Your basketball-roster application is running on port ${PORT}!`);
});

app.listen(PORT, () => {
  console.log(`Your basketball-roster server is running on port ${PORT}`);
});