const mongoose = require('mongoose');
const productModel = require('./productModel');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    profileLink: {
        type: String,
        required: [true, ''],
        default:
            'https://res.cloudinary.com/dpiatasuq/image/upload/v1699162619/WhatsApp_Image_2023-11-05_at_11.06.06_AM_prdly3.jpg',
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
        },
    ],
});

module.exports = mongoose.model('user', UserSchema);
