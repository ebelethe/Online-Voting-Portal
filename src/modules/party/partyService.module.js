import Party from "../../models/party.model.js";

export const createPartyService = async (partyData) => {
  const existingParty = await Party.findOne({
    $or: [
      { partyName: partyData.partyName },
      { acronym: partyData.acronym },
    ],
  });

  if (existingParty) {
    throw new Error("Party already exists.");
  }

  const party = await Party.create(partyData);

  return party;
};