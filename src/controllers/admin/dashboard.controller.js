
import User from "../../models/user.model.js";

export const getDashboard = async (req, res) => {
  try {
    // Count total voters
    const totalVoters = await User.countDocuments({
      role: "voter",
    });

    // Placeholder values until their modules are implemented
    const totalCandidates = 0;
    const totalElections = 0;
    const totalVotes = 0;
    const electionStatus = "No Election";

    return res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data: {
        totalVoters,
        totalCandidates,
        totalElections,
        totalVotes,
        electionStatus,
      },
    });
  } catch (error) {
  
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};