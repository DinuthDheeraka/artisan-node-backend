const express = require('express');
const cors = require('cors');

/**for .env*/
require('dotenv').config();

/**connecting to mongodb*/
require('./app/db/connection');

/**importing main router*/
const mainRouter = require('./app/route/main-routes');

/**define cors options*/
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
};

const app = express();
app.use(cors(corsOptions));

const port = process.env.PORT || process.env.SERVER_PORT;

/**parse json body*/
app.use(express.json());

/**register main router*/
app.use('/api', mainRouter);

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});