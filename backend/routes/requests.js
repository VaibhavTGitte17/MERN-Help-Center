const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// POST request
router.post('/', async (req, res) => {
  const { title, description } = req.body;

  try {
    const newRequest = new Request({ title, description });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all requests
router.get('/', async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
