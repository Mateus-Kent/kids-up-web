const express = require("express");
const cookieParser = require('cookie-parser')

const routes = require("./routes/routes");

const server = express();

server.set("view engine", "ejs");

server.set("views", __dirname + "/views/");

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

server.use(
  cookieParser()
);

server.use(routes);

server.listen(3001, () =>
  console.log("✨ KIDS UP (API) > Running on localhost:3001 ✨")
);
