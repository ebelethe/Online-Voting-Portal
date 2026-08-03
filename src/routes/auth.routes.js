import express from "express";

import  authenticate from "../middleware/auth.middleware.js";

import {registerUser} from "../controllers/auth/register.controller.js";
import {loginUser} from "../controllers/auth/login.controller.js";
import { requestResetPassword, resetPassword, changePassword } from "../controllers/auth/password.controller.js";
import { authLimiter } from "../middleware/rateLimiter.middleware.js";

const router = express.Router();

router.post("/register",authLimiter, registerUser);

router.post("/login",authLimiter, loginUser);

router.post("/reset-password/request", authLimiter, requestResetPassword);

router.post("/reset-password", authLimiter, resetPassword);

router.put( "/change-password", authLimiter, authenticate, changePassword);

export default router;
