import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Your basketball-roster application is running on port ${PORT}!`);
});

app.listen(PORT, () => {
  console.log(`Your basketball-roster server is running on port ${PORT}`);
});
