import Candidate from "../../models/candidate.model.js";
import Party from "../../models/party.model.js";
import Election from "../../models/election.model.js";

export const createCandidateService = async (candidateData) => {
  const {
    primaryCandidate,
    runningMate,
    party,
    election,
    manifesto,
  } = candidateData;

  // Check Party
  const partyExists = await Party.findById(party);

  if (!partyExists) {
    throw new Error("Party not found.");
  }

  // Check Election
  const electionExists = await Election.findById(election);

  if (!electionExists) {
    throw new Error("Election not found.");
  }

  // Check duplicate ticket
  const existingTicket = await Candidate.findOne({
    party,
    election,
  });

  if (existingTicket) {
    throw new Error(
      "This party already has a candidate ticket in this election."
    );
  }

  const candidate = await Candidate.create({
    primaryCandidate,
    runningMate,
    party,
    election,
    manifesto,
  });

  return candidate;
};

export const getAllCandidatesService = async () => {
  return await Candidate.find()
    .populate("party", "partyName acronym logo")
    .populate("election", "title status")
    .sort({ createdAt: -1 });
};

export const getCandidateByIdService = async (id) => {
  return await Candidate.findById(id)
    .populate("party", "partyName acronym logo")
    .populate("election", "title status");
};

export const updateCandidateService = async (id, data) => {
  const {
    primaryCandidate,
    runningMate,
    party,
    election,
    manifesto,
    isActive,
  } = data;

  if (party) {
    const partyExists = await Party.findById(party);

    if (!partyExists) {
      throw new Error("Party not found.");
    }
  }

  if (election) {
    const electionExists = await Election.findById(election);

    if (!electionExists) {
      throw new Error("Election not found.");
    }
  }

  const candidate = await Candidate.findByIdAndUpdate(
    id,
    {
      primaryCandidate,
      runningMate,
      party,
      election,
      manifesto,
      isActive,
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .populate("party", "partyName acronym logo")
    .populate("election", "title status");

  return candidate;
};

export const deleteCandidateService = async (id) => {
  return await Candidate.findByIdAndDelete(id);
};