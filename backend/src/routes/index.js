const { Router } = require('express');

const userRouter = require('./user');
const sessionRouter = require('./session');

const routes = Router();

routes.use('/user', userRouter);
routes.use('/login', sessionRouter);

module.exports = routes;
