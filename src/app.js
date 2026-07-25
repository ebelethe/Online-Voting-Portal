import express from "express";
import cors from "cors";  //allows my frontend to communicate with your backend  
import router from "./routes/auth/auth.routes.js";

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", router);


export default app;