const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * create products schema and model
 */

const complaintSchema = new Schema ({
  sendBy: {
    type: {}
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  orderId: {
    type: String
  }
})


const Complaint = mongoose.model('complaint', complaintSchema);

module.exports = Complaint;