const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const candidates = require("./routes/candidates");
app.use("/candidates", candidates);
module.exports = app;
