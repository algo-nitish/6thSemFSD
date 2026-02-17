//get route example
const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("Home route working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
module.exports = app;

//post route example
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  res.json({
    success: true,
    user: username,
  });
});

module.exports = app;