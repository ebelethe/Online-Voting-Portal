import express from "express";
import  authenticate from "../../middleware/auth.middleware.js";
import  authorize  from "../../middleware/authorize.middleware.js";
import { getDashboard } from "../../controllers/admin/dashboard.controller.js";
import {getAllVoters,getVoterById,updateVoter,deleteVoter,
} from "../../controllers/admin/voter.controller.js";

const router =express.Router();

router.get("/dashboard",
  authenticate,
  authorize("admin"),
  getDashboard
);
router.get(
  "/voters",
  authenticate,
  authorize("admin"),
  getAllVoters
);

router.get(
  "/voters/:id",
  authenticate,
  authorize("admin"),
  getVoterById
);

router.put(
  "/voters/:id",
  authenticate,
  authorize("admin"),
  updateVoter
);

router.delete(
  "/voters/:id",
  authenticate,
  authorize("admin"),
  deleteVoter
);

export default router;