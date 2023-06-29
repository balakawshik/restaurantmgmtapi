const mongoose = require("mongoose");

const foodCommerceDb = () => {
  mongoose
    .connect(process.env.DB_ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((con) => {
      console.log(`Mongo DB with host ${con.connection.host}`);
    });
};


module.exports = foodCommerceDb;