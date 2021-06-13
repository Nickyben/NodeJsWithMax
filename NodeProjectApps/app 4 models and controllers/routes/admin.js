const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const adminController = require('../controllers/admin'); //gets the exports obj(all the exported functions) in that file as an obj
const { getAddProduct, postAddProduct, getProducts} = adminController;

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/products=> GET
router.get('/products', getProducts);

// /admin/ =>GET
router.get('/', getAddProduct);


// /admin/add-product =>POST
router.post('/add-product', postAddProduct);


module.exports = router;
