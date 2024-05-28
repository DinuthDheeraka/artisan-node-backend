const express = require('express');

const authRouter = require('../route/auth/auth-routes');
const userRouter = require('../route/user/user-routes');
const productRouter = require('../route/product/product-routes');
const {existsSync, readFile} = require("node:fs");

const mainRouter = express.Router();

mainRouter.use('/v1/auth', authRouter);
mainRouter.use('/v1/user', userRouter);
mainRouter.use('/v1/product', productRouter);
mainRouter.get('/image', (req, res) => {
    // Read the image file (replace 'path_to_your_image.jpg' with the actual path to your image file)
    const {path} = req.query;
    // Check if the file exists
    if (existsSync(path)) {
        // Read the file asynchronously
        readFile(path, (err, data) => {
            if (err) {
                console.error('Error reading image file:', err);
                res.status(500).send('Internal Server Error');
            } else {
                // Set the appropriate content type for the response
                res.setHeader('Content-Type', 'image/jpeg');
                // Send the image data as the response
                res.send(data);
            }
        });
    } else {
        res.status(404).send('Image not found');
    }
});

module.exports = mainRouter;

