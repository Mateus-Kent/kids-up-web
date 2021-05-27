const express = require("express");
const server = express();
const routes = require("./routes/routes");

server.set('view engine' , 'ejs');

server.set('views' , __dirname + "/views/");

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

server.use(routes);
server.listen(3001, () => console.log("rodando"));