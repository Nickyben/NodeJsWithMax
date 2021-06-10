const express = require('express');
const rootDir = require('../util/path');

const path = require('path');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
	const products = adminData.products;
	//with pug  templating engine
	res.render('shop', {
		//this is actually shop.pug in views folder, however, we don't need to specify the path and ext since pug and views have been registered as views engine and views
		products,
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true, 
		pageTitle: 'Shop',
		path: '/',
	});
	// res.sendFile(
	//     path.join(rootDir, 'views', 'shop.html')

	//     //instead of path.join(__dirname, '../', 'views', 'shop.html')
	// ); //builds the path to work both windows and linux systems
});

module.exports = router;
