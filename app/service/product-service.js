const Product = require("../model/Product");

const saveProduct = async (data, files) => {
    try {

        const {name, description, qty, price, gender, productCategory, productSize} = data;

        // create product
        const product = new Product({
                name: name,
                price: price,
                size: productSize,
                qty: qty,
                desc: description,
                img1: `${'http://localhost:9090/api/image?path='}${files['img1'][0].path}`,
                img2: `${'http://localhost:9090/api/image?path='}${files['img2'][0].path}`,
                category: productCategory,
                gender: gender,
                sellerId: 1
            }
        );

        // save product
        const savedProduct = await product.save();

        return {success: true, statusCode: 200, tokens: savedProduct};
    } catch (e) {
        throw e;
    }
}

const findAll = async () => {
    try {
        return {
            success: true,
            statusCode: 200,
            data: await Product.find(undefined, undefined, undefined)
        }
    } catch (e) {
        throw e;
    }
}

const findById = async (id) => {
    try {
        return {
            success: true,
            statusCode: 200,
            data: await Product.findOne({_id: id}, undefined, undefined)
        }
    } catch (e) {
        throw e;
    }
}


module.exports = {saveProduct, findAll, findById}