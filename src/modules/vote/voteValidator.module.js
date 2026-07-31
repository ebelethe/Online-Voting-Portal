export const validateVote = (data) => {
  const { election, party } = data;

  if (!election || !party) {
    return {
      valid: false,
      message: "Election and Party are required.",
    };
  }

  return {
    valid: true,
  };
};