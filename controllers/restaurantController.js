const Restaurant = require("../models/restaurants");
const { networkInterfaces } = require('os');

exports.getRestaurants = function (req, res) {

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

  res.status(200).json({
    success: true,
    message: "Welcome to the Restaurants APIs",
    hostip: results["en0"][0]
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
    const restaurant = await Restaurant.updateOne( {name:req.params.name} ,req.body);
    res.status(200).json({
      success: true,
      message: "Restaurant Modified",
      data: restaurant,
    });
  };
  
