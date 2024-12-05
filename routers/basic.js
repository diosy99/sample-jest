const Router = require('express').Router();

const basicController = require('../controllers/basic')

Router.post('/addition', basicController.addNumber);

module.exports = Router;