
const ProductService = require('../../services/product.service');
const ProductServiceInstance = ProductService; 

const product = async (req, res) => {
  const { firstname, lastname, category, price } = req.body;

  try {
    
    const newProduct = await ProductServiceInstance.createProduct(firstname, lastname, category, price);
    res.json(newProduct);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in creating product");
  }
};

module.exports = product;
