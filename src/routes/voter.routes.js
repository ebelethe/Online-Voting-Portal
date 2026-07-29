import express from "express";

import  authenticate from "../middleware/auth.middleware.js";
import  authorize  from "../middleware/authorize.middleware.js";

import { getAllVoters } from "../controllers/voter/getAllVoters.controller.js";
import { getVoterById } from "../controllers/voter/getVoterById.controller.js";
import { updateVoter } from "../controllers/voter/updateVoter.controller.js";
import { deleteVoter } from "../controllers/voter/deleteVoter.controller.js";

const router = express.Router();


router.get("/", authenticate,
  authorize("admin"),getAllVoters);
router.get("/:id", authenticate,
    authorize("admin"),getVoterById);

router.put("/:id",authenticate,
  authorize("admin"),updateVoter);

router.delete("/:id", authenticate,
  authorize("admin"),deleteVoter);
export default router;