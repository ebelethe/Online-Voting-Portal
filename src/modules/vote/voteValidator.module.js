export const validateVote = (data) => {
  const { partyId } = data;

  if (!partyId) {
    return {
      valid: false,
      message: "partyId is required.",
    };
  }

  return {
    valid: true,
  };
};