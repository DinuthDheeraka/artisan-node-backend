const {exceptionHandler} = require("../exception/ExceptionHandler");
const {saveOrder, findOrdersByUser, findOrderById} = require("../service/order-service");

const _saveOrder = async (req, res) => {
    try {
        return res.status(200).json(await saveOrder(req.body));
    } catch (e) {
        return res.status(200).json(await exceptionHandler(e));
    }
}

const findOrderByUser = async (req, res) => {
    try {
        return res.status(200).json(await findOrdersByUser(req.query));
    } catch (e) {
        return res.status(200).json(await exceptionHandler(e));
    }
}

const _findOrderById = async (req, res) => {
    try {
        return res.status(200).json(await findOrderById(req.params.id));
    } catch (e) {
        return res.status(200).json(await exceptionHandler(e));
    }
}

module.exports = {_saveOrder, findOrderByUser, _findOrderById};