import transporter from "./mailer.module.js";

export const sendResetPasswordEmail = async (
    email,
    resetToken
) => {

    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Reset Your Password",
        html: `
            <h2>Password Reset Request</h2>

            <p>You requested to reset your password.</p>

            <p>Click the link below to reset it:</p>

            <a href="${resetLink}">
                Reset Password
            </a>

            <p>This link expires in 15 minutes.</p>

            <p>If you didn't request this, please ignore this email.</p>
        `,
    });

    return {
        success: true,
        message: "Password reset email sent successfully.",
    };
};