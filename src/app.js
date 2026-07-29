import express from "express";
import cors from "cors";  //allows my frontend to communicate with your backend  

import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import voterRoutes from "./routes/voter.routes.js";
import candidateRoutes from "./routes/candidate.routes.js";
import electionRoutes from "./routes/election.routes.js";

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/voter", voterRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/election", electionRoutes);

export default app;