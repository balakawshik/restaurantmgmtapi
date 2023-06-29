const express = require('express');
const router = express.Router();

//Importing Contoller methods

const {
    getRestaurants,
    createRestaurant,
    updateRestaurant
} = require('../controllers/restaurantController');

router.route('/restaurants').get(getRestaurants)
router.route('/restaurants/create').post(createRestaurant);
router.route('/restaurants/update/:name').post(updateRestaurant);

module.exports = router;