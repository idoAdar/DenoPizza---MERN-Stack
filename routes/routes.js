const express = require('express');
const { body, validationResult } = require('express-validator');
const controller = require('../controller/controller');

const route = express.Router();

// url: http://localhost:5000/api/deno
// method: POST
// desc: Create new order
// Public
route.post('/', [
    body('customer', 'Customer is required').notEmpty(),
    body('order', 'Order is required').notEmpty(),
    body('quantity', 'Quantity is required').notEmpty(),
    body('address', 'Address is required').notEmpty(),
    body('zipCode', 'zipCode is required').notEmpty(),
    body('price', 'Price is required').notEmpty(),
    body('creditCard', 'CreditCard is required').notEmpty()
], controller.postOrder);

// url: http://localhost:5000/api/deno/candidate
// method: POST
// desc: Create new candidate
// Public
route.post('/candidate', [
    body('fullname', 'Fullname is required').notEmpty(),
    body('phone', 'Phone is required').notEmpty(),
    body('address', 'Address is required').notEmpty(),
    body('experience', 'Experience is required').notEmpty(),
], controller.postCandidate);

module.exports = route;