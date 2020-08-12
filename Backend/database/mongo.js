const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/my_database';

const DBConnection = async () => {
  if (mongoose.connect(mongoDB, {
      useNewUrlParser: true
    })) {
    console.log("connected !!" + mongoDB);
  } else db.on('error', console.error.bind(console, 'MongoDB connection error:'));

}
module.exports = DBConnection;
