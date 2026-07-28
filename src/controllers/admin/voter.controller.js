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