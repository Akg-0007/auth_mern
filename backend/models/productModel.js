const mongoose = require('mongoose')

const ProductSchema =new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("product", ProductSchema);


