
const ProductModel = require('../../models/productModel');

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

const getAllproduct = async(req,res)=>{
 try{
  const products = await ProductModel.find({});
  res.status(200).json(products);
 }
 catch(err){
res.status(400).json({message: "not able to find products"});
 }
}

module.exports = {product,getAllproduct};
