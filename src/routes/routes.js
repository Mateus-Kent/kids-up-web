const express = require("express");
const routes = express.Router();
const error = require("../middleware/pageError");

const fetch = require('node-fetch')

const parent = [];

routes.get("/", (req, res) => res.render("index", { parent: undefined }));

routes.get("/signup", (req, res) => res.render("signup"));

routes.post("/signup", async (req, res) => {
  const { email, phone, password, username } = req.body;
  console.log(req.body);
  try {
   const response = await fetch("http://localhost:3000/parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, phone_number: phone, password, username, profile_photo: 'adsdasda'  }),
    });
    console.log( await response.json())
    return res.redirect("/");
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
});

routes.get("/login", (req, res) => res.render("login"));

routes.get("/edit-profile", (req, res) => res.render("edit-profile"));

routes.use(error);

module.exports = routes;
