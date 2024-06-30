const express = require('express');

const {_saveOrder, findOrderByUser, _findOrderById} = require("../../controller/order-controller");

const router = express.Router();

router.post('/', _saveOrder);

router.get('/', findOrderByUser);

router.get('/:id', _findOrderById);

module.exports = router;