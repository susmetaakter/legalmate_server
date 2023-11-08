const mongoose = require('mongoose');
const { mongodbURL } = require('../secret');

const connectMongoDb = async () => {
   mongoose.set('strictQuery', false);
   try {
      await mongoose
         .connect(mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "legalmateDb",
         })
         .then(() => console.log("Database connection successful"))
         .catch((err) => console.log(err));
   } catch (error) {
      console.error('Could not connect to DataBase: ', error.toString());
   }
}

module.exports = connectMongoDb