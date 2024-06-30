const Order = require('../model/Order');
const Product = require("../model/Product");

const saveOrder = async (data) => {
    try {
        const {user, items} = data;

        let orderItems = [];

        for (const item of items) {

            const productById = await Product.findOne({_id: item.id}, undefined, undefined);

            if (!productById) {
                throw new Error(`Product with id ${item.id} not found!`);
            }

            await Product.updateOne({_id: item.id}, {qty: productById['qty'] - item['selectedQty']});

            orderItems.push({
                itemId: item['id'],
                itemImg: productById['img1'],
                itemName: productById['name'],
                itemSize: productById['size'],
                qty: item['selectedQty'],
                price: item['price']
            });
        }

        const order = new Order({
            userId: user._id,
            orderId: generateOrderId(),
            items: orderItems
        });

        const savedOrder = await order.save();

        console.log(savedOrder)

        return {
            success: true,
            statusCode: 200,
            data: savedOrder,
            message: 'Order placed successfully.'
        };
    } catch (e) {
        throw e;
    }
}

const findOrdersByUser = async (data) => {
    try {

        const {user_id} = data;

        console.log(user_id)

        return {
            statusCode: 200,
            success: true,
            data: await Order.find({userId: user_id}, undefined, undefined)
        }

    } catch (e) {
        throw e;
    }
}

const findOrderById = async (data) => {
    try {

        return {
            statusCode: 200,
            success: true,
            data: await Order.findOne({orderId: data}, undefined, undefined)
        }

    } catch (e) {
        throw e;
    }
}

function generateOrderId() {
    return `ORD-${Math.floor(Date.now() / 1000)}`;
}


module.exports = {saveOrder, findOrdersByUser, findOrderById};