const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Order = require('../models/orders')
const Product = require('../models/products')
const Complaint = require('../models/complaint')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kristi' });
});

/**
 * Start Users
 */

// GET all users
router.get('/users', function(req, res, next) {
  User.find({}).then(function(users) {
    res.send(users)
  });
});

//get one user by id

router.get('/users/:id', function(req, res, next) {
  User.findById({_id: req.params.id}).then(function(users) {
    res.send(users)
  });
});

//create user
router.post('/users', function(req, res, next) {
  User.create(req.body).then(function(user) {
    res.send(user)
  })
});

//login

router.post('/login', function(req, res, next) {
  console.log(req.body.email, req.body.password)
  User.find({email: req.body.email, password: req.body.password}).then(function(user) {
    res.send(user)
  })
});

//update user

router.put('/users/:id', function(req, res, next) {
  User.findByIdAndUpdate({_id: req.params.id}, req.body).then((user)=> {
    res.send(user)
  })
})

router.delete('/users/:id', function(req, res, next) {
  User.findByIdAndRemove({_id: req.params.id}).then(function(user) {
    res.send(user);
  })
});


/**
 * End users
 */


/**
 * Start Orders
 */

router.post('/orders', function(req, res, next) {
  Order.create(req.body).then(function(orders) {
    res.send(orders)
  })
});

router.get('/orders/:id', function(req, res, next) {
  Order.find({_id: req.params.id}).then(function(order) {
    res.send(order)
  })
});

router.get('/orders', function(req, res, next) {
  Order.find({}).then(function(orders) {
    res.send(orders)
  })
});

router.put('/orders/:id', function(req, res, next) {
  Order.findByIdAndUpdate({_id: req.params.id}, req.body).then((order) => {
    res.send(order)
  })
})

router.delete('/orders/:id', function(req, res, next) {
  Order.findByIdAndRemove({_id: req.params.id}).then(function(order) {
    res.send(order);
  })
});
/**
 * End Orders
 */



/**
 * Start Products
 */

router.get('/products', function(req, res, next) {
  Product.find({}).then(function(product) {
    res.send(product)
  })
});

router.get('/products/:id', function(req, res, next) {
  Product.find({_id: req.params.id}).then(function(product) {
    res.send(product)
  })
});

router.post('/products', function(req, res, next) {
  Product.create(req.body).then(function(product) {
    res.send(product)
  })
});

router.delete('/products/:id', function(req, res, next) {
  Product.findByIdAndRemove({_id: req.params.id}).then(function(product) {
    res.send(product);
  })
});

router.put('/products/:id', function(req, res, next) {
  Product.findByIdAndUpdate({_id: req.params.id}, req.body).then((product) => {
    res.send(product)
  })
})


/**
 * End Products
 */


/**
 * Start complaint
 */
router.get('/complaint', function(req, res, next) {
  Complaint.find({}).then(function(complaint) {
    res.send(complaint)
  })
});

router.post('/complaint', function(req, res, next) {
  Complaint.create(req.body).then(function(complaint) {
    res.send(complaint)
  })
});

router.get('/complaint/:id', function(req, res, next) {
  Complaint.find({_id: req.params.id}).then(function(complaint) {
    console.log(complaint, 'com')
    res.send(complaint)
  })
});

/**
 * End complaint
 */
module.exports = router;
