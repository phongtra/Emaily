const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
app.get("/hello", (req, res) => {
  res.send({ hello: "motherfucker" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
