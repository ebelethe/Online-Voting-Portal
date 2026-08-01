
export const validateResetPasswordRequest = (email) => {
  if (!email) {
    throw new Error("Email is required.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new Error("Please provide a valid email address.");
  }
};

export const validateResetPassword = (token, newPassword) => {
  if (!token) {
    throw new Error("Reset token is required.");
  }

  if (!newPassword) {
    throw new Error("New password is required.");
  }

  if (newPassword.length < 8) {
    throw new Error("Password must be at least 8 characters long.");
  }
};

export const validateChangePassword = (
  currentPassword,
  newPassword
) => {
  if (!currentPassword) {
    throw new Error("Current password is required.");
  }

  if (!newPassword) {
    throw new Error("New password is required.");
  }

  if (newPassword.length < 8) {
    throw new Error("Password must be at least 8 characters long.");
  }
};