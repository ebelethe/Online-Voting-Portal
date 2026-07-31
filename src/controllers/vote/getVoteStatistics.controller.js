import { getVoteStatisticsService } from "../../modules/vote/voteService.module.js";

export const getVoteStatistics = async (req, res) => {
  try {
    const statistics = await getVoteStatisticsService();

    return res.status(200).json({
      success: true,
      message: "Vote statistics retrieved successfully.",
      data: statistics,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};