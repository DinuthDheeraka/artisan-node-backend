const jwtUtil = require('../util/jwt-util');
const User = require('../model/User');
const {UserException} = require("../exception/UserException");
const {findOneByModel} = require("../util/model-util");
const {generateBcryptHash} = require("../util/hash-util");

/**
 * function for save new user
 * */
const saveUser = async ({name, email, password}) => {
    try {
        console.log(`start function saveUser @params name:${name} email:${email} password:${password}`);

        /**
         * check if user already exists with given email
         * */
        const userByEmail = await findOneByModel(User, {email});

        /**throw if email is already taken
         * */
        if (userByEmail) {
            throw new UserException("Email is already exists!", 200, false);
        }

        /**bcrypt password
         * */
        const hashedPassword = await generateBcryptHash(password);

        /**create user obj
         * */
        const user = new User({
                name: name,
                email: email,
                password: hashedPassword
            }
        );

        /**save user
         * */
        const savedUser = await user.save();

        /**generate tokens
         * */
        const tokens = await jwtUtil.createAccessAndRefreshTokens({username: email});

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