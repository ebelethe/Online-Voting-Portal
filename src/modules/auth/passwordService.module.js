import crypto from "crypto";
import bcrypt from "bcrypt";
import User from "../../models/user.model.js";
import { validateResetPasswordRequest, validateResetPassword, validateChangePassword } from "./passwordValidator.module.js";
import {  } from "./passwordValidator.module.js";
import { sendResetPasswordEmail } from "../email/passwordEmailService.module.js";

export const requestResetPasswordService = async (email) => {

    validateResetPasswordRequest(email);

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User not found.");
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

    user.passwordResetToken = hashedToken;
    user.passwordResetExpires = Date.now() + (15 * 60 * 1000);

    await user.save();
    await sendResetPasswordEmail(user.email, resetToken);

    return {
    success: true,
    message: "Password reset email sent successfully.",
};
};

export const resetPasswordService = async (token, newPassword) => {

    validateResetPassword(token, newPassword);

    const hashedToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
        throw new Error("Invalid or expired reset token.");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    user.passwordResetToken = null;
    user.passwordResetExpires = null;

    await user.save();

    return {
        success: true,
        message: "Password reset successfully.",
    };
};
export const changePasswordService = async (
    userId,
    currentPassword,
    newPassword
) => {

    validateChangePassword(currentPassword, newPassword);

    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found.");
    }

    const isPasswordCorrect = await bcrypt.compare(
        currentPassword,
        user.password
    );

    if (!isPasswordCorrect) {
        throw new Error("Current password is incorrect.");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    await user.save();

    return {
        success: true,
        message: "Password changed successfully.",
    };
};
