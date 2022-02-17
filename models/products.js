// Import mongoose to provide the schema for the database.
const mongoose = require('mongoose');

// Import the Schema.
const Schema = mongoose.Schema;
 
// Create the image schema.
const productsSchema = new mongoose.Schema({
    title: String,
    url: String,
    description: String,
    options: String,
    price: Number,
    date: Date,
    img: {
        type: String,
        required: true
    },
});

// Export the schema.
module.exports = new mongoose.model('products', productsSchema);