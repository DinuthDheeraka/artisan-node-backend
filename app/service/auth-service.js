const jwtUtil = require('../util/jwt-util');
const User = require('../model/User');
const {compare} = require("bcrypt");
const {findOneByModel} = require("../util/model-util");
const {UserException} = require("../exception/UserException");

const login = async ({email, password}) => {
    try {
        console.log(`start function login @params email:${email} password:${password}`);

        /**
         * find user by email
         * */
        const user = await findOneByModel(User, {email});

        if (!user) {
            throw new UserException("Invalid email!", 200, false);
        }

        /**
         * check if password is valid
         * */
        const isValidPassword = await compare(password, user.password);

        if (!isValidPassword) {
            throw new UserException("Invalid Password!", 200, false);
        }

        if (user && isValidPassword) {

            const tokens = await jwtUtil.createAccessAndRefreshTokens({username: email});

            return {
                success: true,
                statusCode: 200,
                user: user,
                tokens: tokens,
                message: "Authenticated user successfully!"
            };
        }

    } catch (err) {
        throw err;
    }
}

module.exports = {
    login
};