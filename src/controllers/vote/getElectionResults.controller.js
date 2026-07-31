import { getElectionResultsService } from "../../modules/vote/voteService.module.js";

export const getElectionResults = async (req, res) => {
  try {
    const { electionId } = req.params;

    const results = await getElectionResultsService(electionId);

    // Declare winner only when election is completed
    let winner = null;

    if (
      results.election.status === "closed" &&
      results.results.length > 0
    ) {
      winner = results.results[0];
    }

    return res.status(200).json({
      success: true,
      message: "Election results retrieved successfully.",
      data: {
        election: results.election,
        totalVotes: results.totalVotes,
        results: results.results,
        winner,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};