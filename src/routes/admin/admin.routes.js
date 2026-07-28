import express from "express";
import  authenticate from "../../middleware/auth.middleware.js";
import  authorize  from "../../middleware/authorize.middleware.js";
import { getDashboard } from "../../controllers/admin/dashboard.controller.js";

const router =express.Router();

router.get("/dashboard",
  authenticate,
  authorize("admin"),
  getDashboard
);

export default router;