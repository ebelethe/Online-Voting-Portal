import Election from "../../models/election.model.js";

export const deleteElection = async (req, res) => {
  try {
    const { id } = req.params;

    const election = await Election.findByIdAndDelete(id);

    if (!election) {
      return res.status(404).json({
        success: false,
        message: "Election not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Election deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};