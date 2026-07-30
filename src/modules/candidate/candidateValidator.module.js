export const validateCandidate = (data) => {
  const {
    primaryCandidate,
    runningMate,
    party,
    election,
    manifesto,
  } = data;

  if (
    !primaryCandidate ||
    !runningMate ||
    !party ||
    !election ||
    !manifesto
  ) {
    return {
      valid: false,
      message:
        "Primary candidate, running mate, party, election and manifesto are required.",
    };
  }

  return {
    valid: true,
  };
};