const jwtUtil = require('../util/jwt-util');
const User = require('../model/User');
const e = require("express");
const {genSalt, hash} = require("bcrypt");
const {UserException} = require("../exception/UserException");
const saveUser = async ({name, email, password}) => {
    try {
        console.log("start function saveUser");

        /**check if user already exists with given email*/
        const userByEmail = await User.findOne(
            {email: email}
        )

        /**throw if email is already taken*/
        if (userByEmail) {
            throw new UserException("Email is already exists!", 200, false);
        }

        /**bcrypt password*/
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        /**create user obj*/
        const user = new User({
                name: name,
                email: email,
                password: hashedPassword
            }
        );

        /**save user*/
        const savedUser = await user.save();

        /**generate tokens*/
        const tokens = await jwtUtil.createAccessAndRefreshTokens({username: email});

        /***/
        return {
            success: true,
            statusCode: 200,
            tokens: tokens,
            user: savedUser,
            message: "User created successfully."
        };

    } catch (err) {
        throw err;
    }
}

module.exports = {
    saveUser
};