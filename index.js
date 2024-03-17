const express = require('express');

/**for .env*/
require('dotenv').config();

/**connecting to mongodb*/
require('./app/db/connection');

/**importing main router*/
const mainRouter = require('./app/route/main-routes');

const app = express();

const port = process.env.PORT || process.env.SERVER_PORT;

/**parse json body*/
app.use(express.json());

/**register main router*/
app.use('/api', mainRouter);

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});