import User from "../../models/user.model.js";
import bcrypt from "bcrypt";


export const registerUser=async (req, res)=>{
    try {
        const { fullName, email, password } = req.body;
        
        //check if user already exist
        const existingUser=await User.findOne({ email });
        if (existingUser){
            return res.status(400).json ({
                success:false, 
                message:"User already exists"});
        }
        const hashedPassword=await bcrypt.hash(password, 10); //user password
        const user=await User.create({
            fullName, 
            email, 
            password:hashedPassword,
            role:"voter",
        });
        res.status(201).json({success:true, message:"Resgistration successful",
            data:user,});
    } catch (error) {
        res.status(500).json({success:false, message:error.message});
    }

}