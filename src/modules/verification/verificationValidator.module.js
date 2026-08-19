export const validateVoterVerification = (data) => {
  const { voterCardId, fullName, dateOfBirth } = data;

  const errors = {};

  if (!voterCardId || typeof voterCardId !== "string") {
    errors.voterCardId = "Voter Card ID is required";
  }

  if (!fullName || typeof fullName !== "string") {
    errors.fullName = "Full name is required";
  }

  if (!dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required"; 
  }

  if (Object.keys(errors).length > 0) {
    return {
      isValid: false,
      errors,
    };
  }

  return {
    isValid: true,
    errors: {},
  };
};