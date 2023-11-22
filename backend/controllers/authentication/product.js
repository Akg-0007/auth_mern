
const ProductService = require('../../services/product.service');
const ProductServiceInstance = ProductService; 

const AuthService = require('../../services/auth.service')
const AuthServiceInstance = new AuthService()

const product = async (req, res) => {
  const { Product, Brand, Category, Price } = req.body;

  try {
    
    const newProduct = await AuthServiceInstance.
    createProduct(Product, Brand, Category, Price);
    res.json(newProduct);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in creating product");
  }
};

module.exports = product;
