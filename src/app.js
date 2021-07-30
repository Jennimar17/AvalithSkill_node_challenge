const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/", routes);

server.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  module.exports = server;