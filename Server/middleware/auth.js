// export const protect=async(req,resizeBy,next)=>{
//     const token=req.headers.authorization;
//     if(!token){
//         return resizeBy.json({success:false,message:"not authorized"})

//     }
//     try {
//         const userId=jwt.decode(token,process.env.JWT_SECRET)
//         if(!userId){
//             return resizeBy.json({success:false,message:"not authorized"})

//         }
//         req.user=await User.findById(userId).select("-password")
//         next();
//     } catch (error) {
//          return res.json({success:false,message:"not authorized"})
//     }
// }
 const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ message: 'Token is not valid' });
    }
    
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};