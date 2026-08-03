const electionNotificationTemplate = (
    fullName,
    title,
    message
) => {
    return `
        <h2>Hello ${fullName},</h2>

        <h3>${title}</h3>

             <p>${message}</p>

        <br>

        <p>Thank you for using the Online Voting Portal.</p>

        <p><strong>Online Voting Portal Team</strong></p>
    `;
};

export default electionNotificationTemplate;