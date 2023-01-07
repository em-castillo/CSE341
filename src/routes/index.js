const routes = require('express').Router();
const data = require('../controllers/');

routes.get('/', data.returnData);

module.exports = routes;