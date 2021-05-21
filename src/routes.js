const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/" 

routes.get('/', (req , res) =>res.render(views + 'index'));

routes.get('/signup', (req , res) => res.render(views + 'signup'));

routes.get('/login', (req , res) => res.render(views + 'login'));

routes.get('/edit-profile', (req , res) => res.render(views + 'edit-profile'));

module.exports = routes;