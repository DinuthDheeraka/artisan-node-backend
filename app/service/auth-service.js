const User = require('../model/User');

async function persistUser() {
    try {

        const newUser = new User({
            name: "dinuth", email: "dinuth@gmail.com"
        });

        await newUser.save();

        return newUser;

    } catch (err) {
        console.error("Error persisting user:", err);
        throw err; // Re-throw the error for handling in the calling layer
    }
}

module.exports = {
    persistUser,
};