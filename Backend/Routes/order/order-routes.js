
const express = require('express');
const router = express.Router();
const orderController =require("./order-controller");
const cors =require ('cors')

router.post(
    '/',orderController.PostOrder
);
router.get('/',orderController.GetOrder)

module.exports = router;