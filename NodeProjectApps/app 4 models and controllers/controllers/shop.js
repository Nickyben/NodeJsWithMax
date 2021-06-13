const Product = require('../models/product')

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      products,
      pageTitle: 'Home',
      path: '/',
    });
  });

}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      products,

      pageTitle: 'All Products',
      path: '/products',
    });
  });

}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'My Cart',
    path: '/cart',
  });

}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'My Checkout',
    path: '/checkout',
  });

}