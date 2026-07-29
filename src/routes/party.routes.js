import express from "express";

import { createParty } from "../controllers/party/createParty.controller.js";
import { getAllParties } from "../controllers/party/getAllParties.controller.js";
import { getPartyById } from "../controllers/party/getPartyById.controller.js";
import { updateParty } from "../controllers/party/updateParty.controller.js";
import { deleteParty } from "../controllers/party/deleteParty.controller.js";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/authorize.middleware.js";

const router = express.Router();

// Admin Only
router.post("/", authenticate, authorize("admin"), createParty);
router.put("/:id", authenticate, authorize("admin"), updateParty);
router.delete("/:id", authenticate, authorize("admin"), deleteParty);

// Authenticated Users
router.get("/", authenticate, getAllParties);
router.get("/:id", authenticate, getPartyById);

export default router;