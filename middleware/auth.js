export const protect=async(req,resizeBy,next)=>{
    const token=req.headers.authorization;
    if(!token){
        return resizeBy.json({success:false,message:"not authorized"})

    }
    try {
        const userId=jwt.decode(token,process.env.JWT_SECRET)
        if(!userId){
            return resizeBy.json({success:false,message:"not authorized"})

        }
        req.user=await User.findById(userId).select("-password")
        next();
    } catch (error) {
         return res.json({success:false,message:"not authorized"})
    }
}