import express from "express";

import { getAuditLogsController } from "../controllers/auditLog/getAuditLogs.controller.js";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/authorize.middleware.js";

const router = express.Router();


router.get("/", authenticate, authorize("admin"), getAuditLogsController);

export default router;