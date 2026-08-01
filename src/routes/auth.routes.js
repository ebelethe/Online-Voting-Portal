import express from "express";

import  authenticate from "../middleware/auth.middleware.js";

import {registerUser} from "../controllers/auth/register.controller.js";
import {loginUser} from "../controllers/auth/login.controller.js";
import { requestResetPassword, resetPassword, changePassword } from "../controllers/auth/password.controller.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/reset-password/request", requestResetPassword);

router.post("/reset-password", resetPassword);

router.put( "/change-password", authenticate, changePassword);

export default router;
