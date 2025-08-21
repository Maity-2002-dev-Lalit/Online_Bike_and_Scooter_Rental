 const express = require('express');
const Bike = require('../models/Bike');

const router = express.Router();

// Get all bikes with optional filtering
router.get('/', async (req, res) => {
  try {
    const { type, city, model } = req.query;
    let filter = {};
    
    if (type && type !== 'All') filter.type = type;
    if (city) filter.city = city;
    if (model && model !== 'All') filter.name = model;
    
    const bikes = await Bike.find(filter);
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single bike
router.get('/:id', async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) {
      return res.status(404).json({ message: 'Bike not found' });
    }
    res.json(bike);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new bike (admin only)
router.post('/', async (req, res) => {
  try {
    const bike = new Bike(req.body);
    await bike.save();
    res.status(201).json(bike);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;