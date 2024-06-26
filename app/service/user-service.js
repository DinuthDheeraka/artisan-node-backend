const jwtUtil = require('../util/jwt-util');
const User = require('../model/User');
const {UserException} = require("../exception/UserException");
const {findOneByModel} = require("../util/model-util");
const {generateBcryptHash} = require("../util/hash-util");

/**
 * @description function for save user
 * @param name
 * @param email
 * @param phoneNumber
 * @param homeAddress
 * @param password
 * @param accountType
 */

const saveUser = async ({name, email, phoneNumber, homeAddress, password, accountType}) => {
    try {
        console.log(`start function saveUser 
        @params name:${name} 
        email:${email} 
        password:${password} 
        phoneNumber:${phoneNumber} 
        homeAddress:${homeAddress}
        accountType:${accountType}`);

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
                email: email,
                phoneNumber: phoneNumber,
                homeAddress: homeAddress,
                password: hashedPassword,
                accountType: accountType
            }
        );

        /**save user
         * */
        const savedUser = await user.save();

        /**generate tokens
         * */
        const tokens = await jwtUtil.createAccessAndRefreshTokens
        ({username: email});

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