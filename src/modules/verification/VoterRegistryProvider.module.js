const mockVoters = [
  {
    voterCardId: "TEST-VIN-001",
    fullName: "John Doe",
    dateOfBirth: "1998-05-01",
  },
  {
    voterCardId: "TEST-VIN-002",
    fullName: "Jane Doe",
    dateOfBirth: "1997-08-15",
  },
];

export const verifyVoterWithRegistry = async ({
  voterCardId,
  fullName,
  dateOfBirth,
}) => {
  const voter = mockVoters.find(
    (item) => item.voterCardId === voterCardId
  );

  if (!voter) {
    return {
      verified: false,
      message: "Voter Card ID was not found",
    };
  }

  const identityMatches =
    voter.fullName.trim().toLowerCase() ===
      fullName.trim().toLowerCase() &&
    voter.dateOfBirth === dateOfBirth;

  if (!identityMatches) {
    return {
      verified: false,
      message: "Voter identity details do not match",
    };
  }

  return {
    verified: true,
    message: "Voter identity verified successfully",
    voter: {
      voterCardId: voter.voterCardId,
      fullName: voter.fullName,
      dateOfBirth: voter.dateOfBirth,
    },
  };
};