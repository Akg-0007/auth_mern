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
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    profileLink: {
        type: String,
        required: [true, ""],
        default: "https://res.cloudinary.com/dpiatasuq/image/upload/v1699162619/WhatsApp_Image_2023-11-05_at_11.06.06_AM_prdly3.jpg",
    }
})

module.exports = mongoose.model("product", ProductSchema);


