const jwt = require('jsonwebtoken');

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtAccessTokenExpiration = process.env.JWT_ACCESS_TOKEN_EXPIRATION;
const jwtRefreshTokenExpiration = process.env.JWT_REFRESH_TOKEN_EXPIRATION;

const createAccessAndRefreshTokens = async (payload) => {
    try {

        const accessToken = jwt.sign(payload, jwtSecretKey, {expiresIn: jwtAccessTokenExpiration});

        const refreshToken = jwt.sign(payload, jwtSecretKey, {expiresIn: jwtRefreshTokenExpiration});

        return {
            accessToken, refreshToken
        }

    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = {
    createAccessAndRefreshTokens
};