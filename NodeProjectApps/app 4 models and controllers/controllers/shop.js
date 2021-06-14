const Product = require('../models/product');

exports.getIndexPage = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/index', {
			products,
			pageTitle: 'Home',
			path: '/',
		});
	});
};

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/product-list', {
			products,

			pageTitle: 'All Products',
			path: '/products',
		});
	});
};

exports.getSpecificProduct = (req, res, next) => {
	const productId = req.params.productId;
	Product.findProductById(productId, (product) => {
		console.log(product);
	});
	res.redirect('/');
};

exports.getCart = (req, res, next) => {
	res.render('shop/cart', {
		pageTitle: 'My Cart',
		path: '/cart',
	});
};

exports.getOrders = (req, res, next) => {
	res.render('shop/orders', {
		pageTitle: 'My Orders',
		path: '/orders',
	});
};

exports.getCheckout = (req, res, next) => {
	res.render('shop/checkout', {
		pageTitle: 'My Checkout',
		path: '/checkout',
	});
};
