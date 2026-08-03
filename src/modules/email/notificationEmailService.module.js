
import transporter from "./mailer.module.js";
import electionNotificationTemplate from "../../templates/electionNotification.template.js";

export const sendElectionNotificationEmail = async ({
    email,
    fullName,
    title,
    message,
}) => {
    try {
        const html = electionNotificationTemplate(
            fullName,
            title,
            message
        );

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: title,
            html,
        });

        return {
            success: true,
            message: "Election notification email sent successfully.",
        };

    } catch (error) {
        throw new Error(error.message);
    }
};