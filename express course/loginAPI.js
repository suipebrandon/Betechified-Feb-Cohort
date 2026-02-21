require("dotenv").config(); //load env from .env file

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to User API");
});

app.post("/register", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Missing Fields" });
  res.status(201).json({ message: `Registered: ${name} (${email})` });
});

app.get("/user/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Sample User" });
});

//Dynamic port: falls back to 3000 if PORt env var not set
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API live port ${PORT}"));
