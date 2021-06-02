const express = require("express");
const routes = express.Router();



// routes.get("/", async (req, res) => {
//    const parent = [];
//    const response = await fetch('http://localhost:3000/parents')
//    const data = await response.json();
//   console.log(data);

//   return res.render("index");
// });


routes.get("/", (req, res) => res.render("index"));


routes.get("/signup", (req, res) => res.render("signup"));

routes.post("/signup", (req, res) => {
  parent.push({
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    username: req.body.username,
  });
  console.log(parent);
  return res.redirect("/");
});

routes.get("/login", (req, res) => res.render("login"));

routes.get("/edit-profile", (req, res) => res.render("edit-profile"));


routes.get("/error", (req, res) => res.render("error"));

module.exports = routes;
