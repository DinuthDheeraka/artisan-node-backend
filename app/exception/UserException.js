class UserException extends Error {
    constructor(message, statusCode, success) {
        super(message);
        this.statusCode = statusCode || 500;
        this.success = success || false;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {UserException};