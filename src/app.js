import express from "express";
import cors from "cors";  //allows my frontend to communicate with your backend  
import authRoutes from "./routes/auth/auth.routes.js";
import adminRoutes from "./routes/admin/admin.routes.js";

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

export default app;