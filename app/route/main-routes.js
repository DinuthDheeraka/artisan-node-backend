const express = require('express');

const authRouter = require('../route/auth/auth-routes');

const mainRouter = express.Router();

mainRouter.use('/v1/auth', authRouter);

module.exports = mainRouter;

