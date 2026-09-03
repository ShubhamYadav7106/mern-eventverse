const user=require('../models/user');
const jwt=require('jsonwebtoken');

const protect=async(req,res,next)=>{
    let token=req.headers.authorization && req.headers.authorization.startsWith('Bearer')?req.headers.authorization.split(' ')[1]:null;
    if(token){
        try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await user.findById(decoded.id).select('-password');
            if(!req.user){
                return res.status(401).json({message:'Not authorized, user not found'});
            }
            next();

        }catch(error){
            return res.status(401).json({message:'Not authorized, token failed'});
    }
}else{
    return res.status(401).json({message:'Not authorized, no token'});
}
}
const admin=(req,res,next)=>{
    if(req.user && req.user.role==='admin'){
        next();
    }else{
        return res.status(401).json({message:'Not authorized as an admin'});
    }
}
module.exports={protect,admin};