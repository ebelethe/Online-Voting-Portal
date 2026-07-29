export const validateParty = (data) => {
  const { partyName, acronym } = data;

  if (!partyName || !acronym) {
    return {
      valid: false,
      message: "Party name and acronym are required.",
    };
  }

  return {
    valid: true,
  };
};