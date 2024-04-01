const authService = require('../service/auth-service');
const {exceptionHandler} = require("../exception/ExceptionHandler");

const login = async (req, res, next) => {
    try {
        return res.status(200).json(await authService.login(req.body));
    } catch (e) {
        return res.status(200).json(await exceptionHandler(e));
    }
};

module.exports = {login};