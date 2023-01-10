const express = require("express");
const router = express.Router();

const authRoute = require("./auth");
const usersRoute = require("./users");
const productsRoute = require("./products");
const ordersRoute = require("./orders");


// Health check
router.get('/', async function(req, res, next) {
    console.log('rendering');
    res.render('index');
});

router.use("/api/v1/auth", authRoute);
router.use("/api/v1/users", usersRoute);
router.use("/api/v1/products", productsRoute);
router.use("/api/v1/orders", ordersRoute);

module.exports = router;
