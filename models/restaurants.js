const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const foodItemSchema = Schema(
  {
    name: {
      type: "String",
    },
    description: {
      type: "String",
    },
    cuisine: {
      type: "String",
    },
    isVeg: {
      type: "Boolean",
    },
    hasEgg: {
      type: "Boolean",
    },
    availabilityTime: {
      type: "String",
    },
    images: {
      type: ["String"],
    },
    price: {
      type: "Number",
    },
    currency: {
      type: "String",
    },
    group: {
      type: "String",
    },
  },
  { _id: false }
);
const restaurantSchema = Schema(
  {
    name: {
      type: "String",
    },
    description: {
      type: "String",
    },
    cuisine: {
      type: ["String"],
    },
    menu: {
      type: [foodItemSchema],
    },
    location: {
      type: "String",
    },
    image: {
      type: "String",
    },
    rating: {
      type: "Number",
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
    lastUpdatedDate: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
