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
import verificationRoutes from "./routes/verification.routes.js";



const app=express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/voter", voterRoutes);
app.use("/candidate", candidateRoutes);
app.use("/election", electionRoutes);
app.use("/party", partyRoutes);
app.use("/vote", voteRoutes);
app.use("/verification", verificationRoutes)
app.use(errorHandler);

export default app;