const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongooseConnection = require("./config/mongooseConnection");

const app = express();

const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("mongoose", mongooseConnection);

app.use("/api/", routes);

module.exports = app;
