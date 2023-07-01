const Restaurant = require("../models/restaurants");
const IP = require('ip');

exports.getRestaurants = function (req, res) {
  res.status(200).json({
    success: true,
    message: "Welcome to the Restaurants APIs",
    hostip: IP.address(),
  });
};

exports.createRestaurant = async (req, res, next) => {
  const restaurant = await Restaurant.create(req.body);
  res.status(200).json({
    success: true,
    message: "Restaurant Created",
    data: restaurant,
  });
};

exports.updateRestaurant = async (req, res, next) => {
  console.log(req.params.name);
  const restaurant = await Restaurant.updateOne(
    { name: req.params.name },
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Restaurant Modified",
    data: restaurant,
  });
};
