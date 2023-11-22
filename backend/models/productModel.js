const mongoose = require('mongoose')

const ProductSchema =new mongoose.Schema({
    Product:{
        type: String,
        required: true,
    },
    Category:{
        type: String,
        required: true,
    },
    Price:{
        type: String,
        required: true,
    },
    Brand:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("product", ProductSchema);


