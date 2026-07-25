import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./src/app.js";

dotenv.config();
//;
const startServer =async ()=>{
    try{
             const PORT= process.env.PORT || 5000;
        await mongoose.connect(process.env.MONGO_URI);
   

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

         console.log(`Online Voting Portal is connected to Mongodb Community Serverr Locally`);
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1); 
    }
      
};

startServer();







