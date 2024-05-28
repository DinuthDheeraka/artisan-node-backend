const express = require('express');

const multer = require('multer');

const productController = require('../../controller/product-controller');

const productRouter = express.Router();

const upload = multer({
    dest: 'uploads/', // Destination folder where files will be stored
    fileFilter: (req, file, cb) => {
        // Implement any custom file filtering logic here
        cb(null, true); // Accept all files for now
    }
});

productRouter.post('/', upload.fields([{name: 'img1', maxCount: 1}, {
    name: 'img2',
    maxCount: 1
}]), productController.saveProduct);
productRouter.get('/', productController.findAllProducts);
productRouter.get('/:id', productController.findById);

module.exports = productRouter;