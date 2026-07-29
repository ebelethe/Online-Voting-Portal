import User from "../../models/user.model.js";

// Update voter
export const updateVoter = async (req, res) => {
  try {
    const { id } = req.params;

    const voter = await User.findOneAndUpdate(
      {
        _id: id,
        role: "voter",
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!voter) {
      return res.status(404).json({
        success: false,
        message: "Voter not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Voter updated successfully",
      data: voter,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
