const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });

}

exports.postAddProduct = (req, res, next) => {
  const product = new Product({
    title: req.body.title,
  })
  product.save();//saves this particular obj
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      products,
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
      pageTitle: 'Shop',
      path: '/',
    });
  });
 

}