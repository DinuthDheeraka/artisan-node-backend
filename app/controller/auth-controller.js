const authService = require('../util/jwt-util');

const login = async (req, res) => {

    const accessTokens = authService.createAccessAndRefreshTokens({username: 'username'});

    res.status(200).json(
        {
            success: true,
            statusCode: 200,
            accessToken: accessTokens.accessToken,
            refreshToken: accessTokens.refreshToken
        }
    );

};

module.exports = {login};