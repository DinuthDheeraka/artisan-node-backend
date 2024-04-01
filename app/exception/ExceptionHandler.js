const {UserException} = require("./UserException");
const exceptionHandler = async (exception) => {
    try {
        switch (exception) {
            case UserException:
                return await handleUserException(exception);

            default:
                return await handleDefaultExceptions(exception);
        }
    } catch (e) {
        console.log(e);
    }
}

const handleUserException = async (exception) => {
    try {
        return {
            success: exception.success,
            statusCode: exception.statusCode,
            message: exception.message
        };
    } catch (e) {
        console.log(e);
    }
}

const handleDefaultExceptions = async (exception) => {
    try {
        return {
            success: exception.success,
            statusCode: exception.statusCode,
            message: exception.message
        };
    } catch (e) {
        console.log(e);
    }
}

module.exports = {exceptionHandler};