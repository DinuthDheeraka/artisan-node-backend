const jsonwebtoken = require('jsonwebtoken');
const {findOneByModel} = require("./model-util");
const User = require("../model/User");

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const openRoutes = ['/api/v1/auth/login', '/api/v1/user', '/api/image'];

function checkIfRouteIsOpen(routes) {
    return openRoutes.includes(routes);
}

async function checkToken(req, res) {
    try {
        const jwt = (req.get('Authorization').replace('bearer ', ''));

        console.log(jwt);

        const result = (jsonwebtoken.verify(jwt, jwtSecretKey));

        //find user by email
        const user = await findOneByModel(User, {email: result.username});

        console.log(user);

        return 200;
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return 401;
        } else {
            return 402;
        }
    }
}

const mainRoutesFilter = async (req, res, next) => {
    try {
        console.log(req.path);

        if (checkIfRouteIsOpen(req.path)) {
            next();

        } else {
            const result = await checkToken(req, res);

            switch (result) {
                case 200:
                    next();
                    break;

                case 401:
                    return res.status(401).send({success: false, statusCode: 200, message: 'TokenExpired'});

                case 402:
                    return res.status(401).send({success: false, statusCode: 200, message: 'Invalid Token'});
            }
        }
    } catch (e) {
        throw e;
    }
}

module.exports = {mainRoutesFilter};