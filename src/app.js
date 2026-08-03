import express from "express";
import cors from "cors";  //allows my frontend to communicate with your backend
import helmet from "helmet";

import errorHandler from "./middleware/error.middleware.js";  
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import voterRoutes from "./routes/voter.routes.js";
import candidateRoutes from "./routes/candidate.routes.js";
import electionRoutes from "./routes/election.routes.js";
import partyRoutes from "./routes/party.routes.js";
import voteRoutes from "./routes/vote.routes.js";


const app=express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/voter", voterRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/election", electionRoutes);
app.use("/api/party", partyRoutes);
app.use("/api/vote", voteRoutes);
app.use(errorHandler);

export default app;