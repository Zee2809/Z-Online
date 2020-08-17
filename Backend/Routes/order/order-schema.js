const mongoose = require('mongoose');


//Define a schema
const Schema = mongoose.Schema;

/* Schema model */
const OrderDetails = new Schema({
    name: String,
    surname: String,
    gender:String,
    phone:String,
    email:String,
    city:String,
    province:String,
    township:String,
    street:String,
    code:String,
    // product :[{
    //     hoodie:String,
    //     sweater:String,
    //     tshirt:String,
    //     cropjersy:String
    // }]
  }); 
  module.exports = mongoose.model('OrderDetails', OrderDetails);

  