// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./configs/db.js";
// import userRouter from "./routes/userRoutes.js";
// import ownerRouter from "./routes/ownerRoutes.js";
// const app=express()
 
// await connectDB()
// app.use(cors());
// app.use(express.json());
// app.get('/',(req,res)=>res.send("Server is running"));
// app.use('/api/user',userRouter)
// app.use("/api/owner",ownerRouter)
// const PORT=process.env.PORT||3000;
// app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bike-rental', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Import routes
const authRoutes = require('./routes/auth');
const bikesRoutes = require('./routes/bikes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/bikes', bikesRoutes);

// Only include these routes if the files exist
try {
  const bookingsRoutes = require('./routes/bookings');
  app.use('/api/bookings', bookingsRoutes);
  console.log('Bookings routes loaded');
} catch (error) {
  console.log('Bookings routes not available yet');
}

try {
  const subscriptionsRoutes = require('./routes/subscriptions');
  app.use('/api/subscriptions', subscriptionsRoutes);
  console.log('Subscriptions routes loaded');
} catch (error) {
  console.log('Subscriptions routes not available yet');
}

// Basic route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));