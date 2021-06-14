//const products = [];// will be replace with a connected database or file
const fileSys = require('fs');
const path = require('path');
const { randomId } = require('../constants/MyFunctions');
const dirName_Main = require('../util/path');

const productsJsonFilePath = path.join(
	dirName_Main, //gives the directory name of the main module(ie...the dir of the node_modules which is === the project folder path name) traced to the operation system
	'data', //data folder in the project folder
	'products.json' //file to read/write
);

const getProductsFromFile = (callBack) => {
	fileSys.readFile(productsJsonFilePath, (err, fileContent) => {
		//NB:(FOR LEARNING SAKE)this reads entire content of file...use a better method

		if (err) {
			callBack([]); //for now
		} else {
			callBack(JSON.parse(fileContent));
		}
	});
};

module.exports = class Product {
	constructor({ title, imageUrl, description, price }) {
		this.title = title;
		this.imageUrl = 'https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png';
		this.description = description;
		this.price = price;
	}

	save() {
		// products.push(this); //just like doing: products.push(new Product(..)); 'this' here, is an instance
		this.id = randomId({ length: 50 });
		getProductsFromFile((products) => {
			products.push(this);
			fileSys.writeFile(productsJsonFilePath, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll(callBack) {
		getProductsFromFile(callBack);
	}

	static findProductById(id, callBack) {
		getProductsFromFile((products) => {
			const product = products.find((p) => p.id === id);
			callBack(product);
		});
	}
};
