const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const DBConnection = require('./database/mongo');


/* this will let us get the data from a POST
this will let us get the data from a POST 
*/
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



// Connect mongodb
DBConnection()

/* Creating routes */
const order = require('./Routes/order/order-routes')

app.use('/order',order);
// app.use((req, res, next) => {
//         res.status(200).json({});
//     }

// );

/* Export app */
module.exports = app;
