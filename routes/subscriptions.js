 const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// Update user subscription
router.put('/', auth, async (req, res) => {
  try {
    const { subscription } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.userId,
      { subscription },
      { new: true }
    );
    
    res.json({ message: 'Subscription updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;