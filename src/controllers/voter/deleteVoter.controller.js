import User from "../../models/user.model.js";

// Delete voter
export const deleteVoter = async (req, res) => {
  try {
    const { id } = req.params;

    const voter = await User.findOneAndDelete({
      _id: id,
      role: "voter",
    });

    if (!voter) {
      return res.status(404).json({
        success: false,
        message: "Voter not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Voter deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};