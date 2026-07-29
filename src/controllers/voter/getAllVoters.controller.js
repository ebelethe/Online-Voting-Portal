import User from "../../models/user.model.js";

// Get all voters
export const getAllVoters = async (req, res) => {
  try {
    const voters = await User.find({ role: "voter" }).select("-password");

    return res.status(200).json({
      success: true,
      message: "Voters fetched successfully",
      totalVoters: voters.length,
      data: voters,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
