const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * create products schema and model
 */

const productsSchema = new Schema ({
  name: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  quantity: {
    type: Number
  },
  material: String,
  price: Number
})


const Product = mongoose.model('products', productsSchema);

module.exports = Product;