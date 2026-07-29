import User from "../../models/user.model.js";

// Get voter by ID
export const getVoterById = async (req, res) => {
  try {
    const { id } = req.params;

    const voter = await User.findOne({
      _id: id,
      role: "voter",
    }).select("-password");

    if (!voter) {
      return res.status(404).json({
        success: false,
        message: "Voter not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: voter,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
