const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Order schema and model

const orserSchema = new Schema ({
  title: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  orderBy: [],
  product: [
    {
      id: String,
      name: String,
      description: String,
      quantity: Number,
      price: String
    }
  ],
  status: {
    type: String,
    default: 'PENDING'
  },
  total: Number
})


const Order = mongoose.model('orders', orserSchema);

module.exports = Order;