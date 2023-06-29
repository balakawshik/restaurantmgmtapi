const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const foodCommerceDb = require('./config/database');

//Setting up config.env file variables
dotenv.config({path:'./config/config.env'})

//after config initialization, connect to database
foodCommerceDb();

//importing routes
const restaurants = require('./routes/restaurants');
app.use(restaurants);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
})