import express from "express";

import {
    verifyVoterId,submitVoterFaceVerification,
} from "../controllers/verification/verification.controller.js";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/authorize.middleware.js";

const router = express.Router();

// voterId verification endpoint
router.post("/voter-id", authenticate, authorize("voter"), verifyVoterId);
router.post("/face", authenticate, authorize("voter"), submitVoterFaceVerification);

export default router;