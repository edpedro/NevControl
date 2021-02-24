const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const routes = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/", routes);

module.exports = app;
