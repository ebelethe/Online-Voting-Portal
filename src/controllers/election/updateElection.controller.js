import Election from "../../models/election.model.js";

export const updateElection = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the current election first
const existingElection = await Election.findById(id);

if (!existingElection) {
    return res.status(404).json({
        success: false,
        message: "Election not found",
    });
}

// Prevent reopening a closed election
if (
    existingElection.status === "closed" &&
    req.body.status &&
    req.body.status !== "closed"
) {
    return res.status(400).json({
        success: false,
        message: "This election has been closed and cannot be reopened.",
    });
}

// Update the election
const election = await Election.findByIdAndUpdate(
    id,
    req.body,
    {
        new: true,
        runValidators: true,
    }
);

    if (!election) {
      return res.status(404).json({
        success: false,
        message: "Election not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Election updated successfully",
      data: election,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};