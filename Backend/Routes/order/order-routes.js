
const express = require('express');
const router = express.Router();
const orderController =require("./order-controller")

router.post(
    '/',orderController.PostOrder
);

module.exports = router;