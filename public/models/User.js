// import mongoose from "mongoose";
// const userSchema=new mongoose.Schema({
//     name:{type:String,required:true},
//     email:{type:String,required:true,unique:true},
//     password:{type:String,required:true},
//     role:{type:String,enum:["owner","user"],default:'user'},
//     image:{type:String,default:''},
// },{timestamps:true})

// const User=mongoose.model('User',userSchema);
// export default User;
 
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  subscription: {
    type: String,
    default: 'None'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model('User', UserSchema);