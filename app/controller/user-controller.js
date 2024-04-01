const userService = require('../service/user-service');
const {exceptionHandler} = require("../exception/ExceptionHandler");

const saveUser = async (req, res) => {
    try {
        return res.status(200).json(await userService.saveUser(req.body));
    } catch (e) {
        return res.status(200).json(await exceptionHandler(e));
    }
};

module.exports = {saveUser};