const express = require("express");

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("<div><h2>Hi, this is Docker Example Page</h2></div>");
});

app.listen(PORT, () => console.log(`Server is start: ${PORT}`));
