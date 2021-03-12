const { body, validationResult } = require('express-validator');
const Order = require('../models/order');
const Candidate = require('../models/candidate');

exports.postOrder = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        return res.status(200).json(newOrder);
    } catch (error) {
        return res.status(400).json({massege: 'Server Error'});
    }
}

exports.postCandidate = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newCandidate = new Candidate(req.body);
        await newCandidate.save();
        return res.status(200).json(newCandidate);
    } catch (error) {
        return res.status(400).json({massege: 'Server Error'});
    }
}