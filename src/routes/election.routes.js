import express from "express";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/authorize.middleware.js";

import { createElection } from "../controllers/election/createElection.controller.js";
import { getAllElections } from "../controllers/election/getAllElections.controller.js";
import { getElectionById } from "../controllers/election/getElectionById.controller.js";
import { updateElection } from "../controllers/election/updateElection.controller.js";
import { deleteElection } from "../controllers/election/deleteElection.controller.js";
import { openElection } from "../controllers/election/openElection.controller.js";
import { closeElection } from "../controllers/election/closeElection.controller.js";

const router = express.Router();

router.post("/", authenticate, authorize("admin"), createElection);

router.get("/", authenticate, authorize("admin"), getAllElections);

router.get("/:id", authenticate, authorize("admin"), getElectionById);

router.put("/:id", authenticate, authorize("admin"), updateElection);

router.delete("/:id", authenticate, authorize("admin"), deleteElection);

router.patch("/:id/open", authenticate, authorize("admin"), openElection);

router.patch("/:id/close", authenticate, authorize("admin"), closeElection);

export default router;