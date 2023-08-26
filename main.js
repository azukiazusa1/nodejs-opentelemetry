import express from "express";
import { diceRollCounter } from "./counter.js";
await import("./instrumentation.js");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/dice", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  diceRollCounter.add(1, {
    environment: "staging",
    diceRoll,
  });
  res.json({ diceRoll });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
