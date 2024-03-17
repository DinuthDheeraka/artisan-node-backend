const express = require('express');

const authRouter = require('../route/auth/auth-routes');
const userRouter = require('../route/user/user-routes');

const mainRouter = express.Router();

mainRouter.use('/v1/auth', authRouter);
mainRouter.use('/v1/user', userRouter);

module.exports = mainRouter;

