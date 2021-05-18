const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/";

routes.get('/', (request , response) =>response.sendFile(views + 'index.html'));

routes.get('/signup', (request , response) => response.sendFile(views + 'signup.html'));

routes.get('/login', (request , response) => response.sendFile(views + 'login.html'));

module.exports = routes;