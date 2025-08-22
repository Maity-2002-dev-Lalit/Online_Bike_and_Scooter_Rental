// import mongoose from "mongoose";
// const { ObjectId } = mongoose.Schema.Types
// const carSchema = new mongoose.Schema({
//     owner: { type: ObjectId, ref: "User" },
//     brand: { type: String, required: true },
//     model:{type:String,required:true},
//     image:{type:String,required:true},
//     year:{type:Number,required:true},
//     category:{type:String,required:true},
//     seating_capacity:{type:Number,required:true},
//     fuel_type:{type:String,required:true},
//     transmission:{type:String,required:true},
//     pricePerDay:{type:Number,required:true},
//     location:{type:String,required:true},
//     description:{type:String,required:true},
//     isAvailable:{type:Boolean,deafult:true},
// },{timestamps:true});
// const Bike=mongoose.model('Bike',carSchema)
// export default Bike;

 const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  distanceIncluded: {
    type: String
  },
  excessCharge: {
    type: String
  },
  stock: {
    type: String
  },
  offer: {
    type: String
  },
  city: {
    type: String
  }
});

module.exports = mongoose.model('Bike', BikeSchema);