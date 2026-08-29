import { rateLimit } from "express-rate-limit";

export const authLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes

    max: 1,

    message: {
        success: false,
        message: "Too many requests. Please try again after 1 minutes.",
    },

    standardHeaders: true,

    legacyHeaders: false,
});