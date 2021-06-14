const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('admin/add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true,
	});
};

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('admin/products', {
			products,
			pageTitle: 'Admin Products',
			path: '/admin/products',
		});
	});
};

//POST CONTROLLERS
exports.postAddProduct = (req, res, next) => {
	// const { title, imageUrl, price, description} = req.body;
	const product = new Product(req.body);
	product.save(); //saves this particular obj
	res.redirect('/');
};
