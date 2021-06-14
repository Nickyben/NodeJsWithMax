const path = require('path');
const express = require('express');
const {
	getProducts,
	getIndexPage,
	getCart,
	getCheckout,
	getOrders,
	getSpecificProduct,
} = require('../controllers/shop');
const router = express.Router();

router.get('/', getIndexPage);

router.get('/products', getProducts);

router.get('/product-detail/:productId', getSpecificProduct);

router.get('/cart', getCart);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

module.exports = router;
