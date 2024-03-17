const mongoose = require('mongoose');

const uri = process.env.DB_URI;

async function connectToDB() {
    try {

        await mongoose.connect(uri);

        console.log("connected to mongodb..");

    } catch (error) {
        console.error("error connecting to mongodb:", error);
    }
}

connectToDB().then(r => () => {

});