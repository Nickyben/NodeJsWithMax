const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const productsController = require('../controllers/products'); //gets the exports obj(all the exported functions) in that file as an obj
const { getAddProduct, postAddProduct} = productsController;

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/add-product =>POST
router.post('/add-product', postAddProduct);

module.exports = router;
