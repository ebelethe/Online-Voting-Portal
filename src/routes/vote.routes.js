import express from "express";

import { castVote } from "../controllers/vote/castVote.controller.js";
import { getElectionResults } from "../controllers/vote/getElectionResults.controller.js";
import { getMyVote } from "../controllers/vote/getMyVote.controller.js";
import { getVoteStatistics } from "../controllers/vote/getVoteStatistics.controller.js";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/authorize.middleware.js";

const router = express.Router();

// Only voters can vote
router.post("/", authenticate, authorize("voter"), castVote);
// result live everyone can see the live result as voters are casting their votes
router.get("/results/:electionId", authenticate, getElectionResults);
//voters can see thier own vote history
router.get("/my-vote", authenticate, authorize("voter"), getMyVote);
//admin dashboard for voting statistics where admin click vote ended and the winner automatically displayed the winner
router.get("/statistics", authenticate, authorize("admin"), getVoteStatistics);

export default router;
