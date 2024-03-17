const express = require('express');

const userController = require('../../controller/user-controller');

const userRouter = express.Router();

userRouter.post('/', userController.saveUser);

module.exports = userRouter;