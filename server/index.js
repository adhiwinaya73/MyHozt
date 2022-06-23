const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/v1/auth/login", (req, res) => {
  const token = jwt.sign({ id: 1, email: req.body.email }, "secret");
  res.status(201).json({ token });
});

app.post('/decrypt', (req, res) => {
  const token = req.body.token;
  const decoded = jwt.verify(token, 'secret');
  res.status(200).json({decoded});
});

app.listen(3002, () => {
  console.log("Listening on port", 3002);
});
