const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/" 

const parent = []

routes.get('/', (req , res) =>res.render(views + 'index'));

routes.get('/signup', (req , res) => res.render(views + 'signup'));

routes.post('/signup', (req , res) => {
  
  parent.push({
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    username: req.body.username,
  })
  console.log(parent);
  return res.redirect('/');
});

routes.get('/login', (req , res) => res.render(views + 'login'));

routes.get('/edit-profile', (req , res) => res.render(views + 'edit-profile'));

module.exports = routes;