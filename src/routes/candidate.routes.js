import express from "express";

import { createCandidate } from "../controllers/candidate/createCandidate.controller.js";
import { getAllCandidate } from "../controllers/candidate/getAllCandidate.controller.js";
import { getCandidateById } from "../controllers/candidate/getCandidateById.controller.js";
import { updateCandidate } from "../controllers/candidate/updateCandidate.controller.js";
import { deleteCandidate } from "../controllers/candidate/deleteCandidate.controller.js";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/authorize.middleware.js";

const router = express.Router();

// Admin Routes
router.post("/", authenticate, authorize("admin"), createCandidate);
router.put("/:id", authenticate, authorize("admin"), updateCandidate);
router.delete("/:id", authenticate, authorize("admin"), deleteCandidate);

// Authenticated Users
router.get("/", authenticate, getAllCandidate);
router.get("/:id", authenticate, getCandidateById);

export default router;