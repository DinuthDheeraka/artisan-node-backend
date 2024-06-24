const {exceptionHandler} = require("../exception/ExceptionHandler");
const {saveOrder} = require("../service/order-service");

const _saveOrder = async (req, res) => {
    try {
        return res.status(200).json(await saveOrder(req.body));
    } catch (e) {
        return res.status(200).json(await exceptionHandler(e));
    }
}

module.exports = {_saveOrder};