const authService = require('../service/auth-service');

const login = async (req, res) => {

    res.status(200).json(
        {
            success: true,
            statusCode: 200,
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    );

};

module.exports = {login};