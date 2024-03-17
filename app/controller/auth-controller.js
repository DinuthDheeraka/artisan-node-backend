const authService = require('../service/auth-service');

const login = async (req, res, next) => {
    try {
        return res.status(200).json(await authService.login(req.body));
    } catch (e) {
        console.log(e);
    }
};

module.exports = {login};