const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const products = [];


// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(
        path.join(rootDir, 'views', 'add-product.html') //builds the path to work on both windows and linux systems
        //instead of path.join(__dirname, '../', 'views', 'add-product.html')//builds the path to work on both windows and linux systems

    )
});

// /admin/add-product =>POST
router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title
    })
    res.redirect('/');
});



exports.routes = router;
exports.products = products;