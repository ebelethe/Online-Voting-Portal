import express from "express";

import  authenticate from "../middleware/auth.middleware.js";
import  authorize  from "../middleware/authorize.middleware.js";

import { createCandidate } from "../controllers/candidate/createCandidate.controller.js";
import { getAllCandidates } from "../controllers/candidate/getAllCandidate.controller.js";
import {  getCandidateById  } from "../controllers/candidate/getCandidateById.controller.js";
import {  updateCandidate } from "../controllers/candidate/updateCandidate.controller.js";
import {  deleteCandidate } from "../controllers/candidate/deleteCandidate.controller.js";


const router = express.Router();

router.post("/", authenticate,
  authorize("admin"), createCandidate);
router.get("/", authenticate,
  authorize("admin"), getAllCandidates);
router.get("/:id",authenticate,
  authorize("admin"), getCandidateById);
  router.put("/:id", authenticate,
  authorize("admin"), updateCandidate);
  router.delete("/:id", authenticate,
  authorize("admin"),deleteCandidate );

export default router;