const userService = require('../service/user-service');

const saveUser = async (req, res, next) => {
    try {
        return res.status(200).json(await userService.saveUser(req.body));
    } catch (e) {
        console.log(e);
    }
};

module.exports = {saveUser};