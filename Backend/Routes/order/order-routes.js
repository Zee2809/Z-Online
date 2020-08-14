
const express = require('express');
const router = express.Router();
const orderController =require("./order-controller")

router.post(
    '/',orderController.PostOrder
);
router.get('/',orderController.GetOrder)

module.exports = router;