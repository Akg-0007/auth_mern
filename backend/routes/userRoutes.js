const express = require("express");
const router = express.Router();

const signupUser = require("../controllers/authentication/signupUser");
const loginUser = require('../../backend/controllers/authentication/loginUser');
const userDetails = require("../../backend/controllers/authentication/userDetails");
const updateUserDetails = require("../../backend/controllers/authentication/updateUserDetails");
const auth = require("../middlewares/auth");
const { validateSignupData } = require("../middlewares/userValidation");

const product = require("../controllers/authentication/product");


router.post("/signup", validateSignupData, signupUser);

router.post("/createpost/product",product.product);

router.get("/getproduct/product",product.getAllproduct);

router.post("/login", loginUser);
router.get("/me", auth, userDetails);
router.put("/updatedetails/:id", auth, updateUserDetails);

module.exports = router;
