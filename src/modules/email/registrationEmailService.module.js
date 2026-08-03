import transporter from "./mailer.module.js";
import welcomeTemplate from "../../templates/welcome.template.js";

export const sendWelcomeEmail = async (email, fullName) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Welcome to Online Voting Portal",
        html: welcomeTemplate(fullName),
    });

    return {
        success: true,
        message: "Welcome email sent successfully.",
    };
};