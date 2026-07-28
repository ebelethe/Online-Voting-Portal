import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        fullName: {
            type:String,
            required: [true, "Full name is required"],
            trim:true,
        },
        email:{
            type: String,
            required: [true, "Email is required"],
            unique:true,
            lowercase:true,
            trim:true,
        },
        password:{
            type:String,
            required: [true, "Password is required"],
        },
        role: {
            type:String,
            enum: ["admin", "voter"],
            default: "voter",
        },
    },
    {
        timestamps:true,
}
);
const User=mongoose.model("user", userSchema);

export default User;