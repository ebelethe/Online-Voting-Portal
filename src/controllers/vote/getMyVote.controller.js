import { getMyVoteService } from "../../modules/vote/voteService.module.js";

export const getMyVote = async (req, res) => {

    try {

        const votes = await getMyVoteService(req.user.id);

        return res.status(200).json({
            success: true,
            message: "Vote history retrieved successfully.",
            data: votes
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        });

    }

};