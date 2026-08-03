const welcomeTemplate = (fullName) => {
    return `
        <h2>Welcome to the Online Voting Portal</h2>

        <p>Hello ${fullName},</p>

        <p>Your account has been created successfully.</p>

        <p>You can now securely participate in elections using our platform.</p>

        <p>Thank you for joining us.</p>

        <br>

        <p><strong>Online Voting Portal Team</strong></p>
    `;
};

export default welcomeTemplate;