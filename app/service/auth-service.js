const jwtUtil = require('../util/jwt-util');
const {findOne} = require('../repo/repo');
const User = require('../model/User');
const {compare} = require("bcrypt");

const login = async ({email, password}) => {
    console.log("start function login");
    try {

        /**find user by email*/
        const user = await findOne(User, {email: email});

        /***/
        if (!user) {
            throw new Error("Invalid email!");
        }

        /**check if password is valid*/
        const isValidPassword = await compare(password, user.password);

        if (!isValidPassword) {
            throw new Error("Invalid Password!");
        }

        /***/
        if (user && isValidPassword) {
            /***/
            const tokens = await jwtUtil.createAccessAndRefreshTokens({username: email});
            /***/
            return {
                success: true,
                statusCode: 200,
                user: user,
                tokens: tokens,
                message: "Authenticated user successfully!"
            };
        }

    } catch (err) {
        return {
            success: false,
            statusCode: 200,
            message: err.message
        };
    }
}

module.exports = {
    login
};