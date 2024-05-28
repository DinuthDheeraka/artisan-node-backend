const productService = require('../service/product-service');
const {exceptionHandler} = require("../exception/ExceptionHandler");

const {Storage} = require('@google-cloud/storage');
const path = require("node:path");

// Configure Google Cloud Storage (replace with your details)
const projectId = 'first-equinox-423116-d9';
const keyFilename = '/home/dheeraka/Work/Ijse/artisan-node-backend/google_storage.json';

const storage = new Storage({
    projectId,
    keyFilename,
});

const bucketName = 'node_d2008722736';

const saveProduct = async (req, res) => {
    try {
        return res.status(200).json(await productService.saveProduct(req.body, req.files));
    } catch (e) {
        return res.status(200).json(await exceptionHandler(e));
    }
};

const findAllProducts = async (req, res) => {
    try {
        return res.status(200).json(await productService.findAll(req.query));
    } catch (e) {
        return res.status(200).json(await exceptionHandler(e));
    }
};

const findById = async (req, res) => {
    try {
        return res.status(200).json(await productService.findById(req.params.id));
    } catch (e) {
        return res.status(200).json(await exceptionHandler(e));
    }
};

module.exports = {saveProduct, findAllProducts, findById};