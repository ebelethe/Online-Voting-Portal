import { validateVote } from "../../modules/vote/voteValidator.module.js";
import { castVoteService } from "../../modules/vote/voteService.module.js";

export const castVote = async (req, res) => {
  try {
    const validation = validateVote(req.body);

    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        message: validation.message,
      });
    }

    const { election, party } = req.body;

    const vote = await castVoteService(
      req.user.id,
      election,
      party
    );

    return res.status(201).json({
      success: true,
      message: "Vote cast successfully.",
      data: vote,
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};