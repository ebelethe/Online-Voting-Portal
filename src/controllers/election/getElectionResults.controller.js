import { getElectionResultsService } from "../../modules/vote/voteService.module.js";

export const getElectionResults = async (req, res) => {
    try {

        const { electionId } = req.params;

        const results = await getElectionResultsService(electionId);

        return res.status(200).json({
            success: true,
            message: "Election results retrieved successfully.",
            data: {
                election: results.election,
                totalVotes: results.totalVotes,
                winnerDeclared: results.winnerDeclared,
                winner: results.winner,
                tiedCandidates: results.tiedCandidates,
                results: results.results
            }
        });

        
    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        });

    }
};