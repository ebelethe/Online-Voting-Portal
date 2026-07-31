import Vote from "../../models/vote.model.js";
import Candidate from "../../models/candidate.model.js";
import Election from "../../models/election.model.js";

import User from "../../models/user.model.js";
import Party from "../../models/party.model.js";


export const castVoteService = async ( voterId, electionId, partyId) => {
  // Check election
  const election = await Election.findById(electionId);

  if (!election) {
    throw new Error("Election not found.");
  }

  if (election.status !== "active") {
    throw new Error("This election is not active.");
  }

  // Find candidate ticket
  const candidate = await Candidate.findOne({election: electionId, party: partyId, isActive: true,});

  if (!candidate) {
    throw new Error(
      "No active candidate ticket found for this party."
    );
  }

  // Check duplicate vote
  const existingVote = await Vote.findOne({voter: voterId, election: electionId,});

  if (existingVote) {
    throw new Error(
      "You have already voted in this election."
    );
  }

  // Save vote
  const vote = await Vote.create({voter: voterId, election: electionId, party: partyId, candidate: candidate._id,});

  return vote;
};

export const getElectionResultsService = async (electionId) => {
  // Find election
  const election = await Election.findById(electionId);

  if (!election) {
    throw new Error("Election not found.");
  }

  // Get all votes for this election
  const votes = await Vote.find({ election: electionId,}).populate({
    path: "candidate",
    populate: {
      path: "party",
      select: "partyName acronym",
    },
  });

  const totalVotes = votes.length;

  const resultsMap = {};

  votes.forEach((vote) => {
    const candidate = vote.candidate;

    if (!candidate) return;

    const key = candidate._id.toString();

    if (!resultsMap[key]) {
      resultsMap[key] = {
        candidateId: candidate._id,
        primaryCandidate: candidate.primaryCandidate,
        runningMate: candidate.runningMate,
        party: candidate.party,
        votes: 0,
      };
    }

    resultsMap[key].votes++;
  });

  const results = Object.values(resultsMap);

  results.forEach((result) => {
    result.percentage =
      totalVotes === 0
        ? "0%"
        : ((result.votes / totalVotes) * 100).toFixed(2) + "%";
  });

  // Sort highest to lowest
  results.sort((a, b) => b.votes - a.votes);

  return {
    election,
    totalVotes,
    results,
  };
};

//Voter can see thier vote
export const getMyVoteService = async (voterId) => {

    const votes = await Vote.find({
        voter: voterId
    })
    .populate("election")
    .populate("party")
    .populate("candidate");

    return votes;

};
//Admin Dashboard for voting statistics
export const getVoteStatisticsService = async () => {

    const totalVotes = await Vote.countDocuments();

    const totalVoters = await User.countDocuments({   role: "voter", });

    const totalParties = await Party.countDocuments();

    const totalElections = await Election.countDocuments();

    const activeElections = await Election.countDocuments({
        status: "active",
    });

    const closedElections = await Election.countDocuments({
        status: "closed",
    });

    const totalCandidateTickets = await Candidate.countDocuments();

    const turnoutPercentage =
        totalVoters === 0
            ? "0%"
            : (
                (totalVotes / totalVoters) *
                100
              ).toFixed(2) + "%";

    return {
        totalVotes,
        totalVoters,
        turnoutPercentage,
        totalParties,
        totalElections,
        activeElections,
        completedElections,
        totalCandidateTickets,
    };
};