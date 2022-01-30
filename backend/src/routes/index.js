const { Router } = require('express');

const userRouter = require('./user');
const sessionRouter = require('./session');
const beerRouter = require('./beers');

const routes = Router();

routes.use('/user', userRouter);
routes.use('/login', sessionRouter);
routes.use('/beers', beerRouter);

module.exports = routes;
