const {genSalt, hash} = require("bcrypt");
const generateBcryptHash = async (text) => {
    try {
        const salt = await genSalt(10);
        return await hash(text, salt);
    } catch (e) {
        throw e;
    }
}

module.exports = {generateBcryptHash};