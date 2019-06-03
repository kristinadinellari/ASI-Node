const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user Schema & model

const userSchema = new Schema ({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  lastname: {
    type: String
  },
  type: {
    type: String,
    default: 'USER'
  },
  address: {
    type: String
  },
  nipt: {
    type: String
  }
})

const User = mongoose.model('user', userSchema);

module.exports = User;