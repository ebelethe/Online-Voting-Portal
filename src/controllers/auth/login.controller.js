import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../../models/user.model.js";

export const loginUser=async (req,res)=>{
    try{
        const {email, password, }=req.body; //find user
        const user=await User.findOne({ email });
            if (!user){
                return
                res.status(400).json({success:false, message:"Invalid email or password",});
            }
    const isMatch=await bcrypt.compare(password, user.password);
    if (!isMatch){
        return 
        res.status(400).json({success: false, message:"Invalid email or password",});
    }
    //Generate jwt
    const token=jwt.sign({ 
        id:user._id,
        role:user.role,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "id",
    }
);
res.status(500).json ({
    success:true, message:"login successful", token})
}catch (error) {
    res.status(500).json({success:false, message:error.message})
}
}