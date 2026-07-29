import Election from "../../models/election.model.js";

export const updateElection = async (req, res) => {
  try {
    const { id } = req.params;

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