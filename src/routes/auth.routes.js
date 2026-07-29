import express from "express";

import {registerUser} from "../controllers/auth/register.controller.js";
import {loginUser} from "../controllers/auth/login.controller.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

export default router;
