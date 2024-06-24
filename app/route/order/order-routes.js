const express = require('express');

const {_saveOrder} = require("../../controller/order-controller");

const router = express.Router();

router.post('/', _saveOrder);

module.exports = router;