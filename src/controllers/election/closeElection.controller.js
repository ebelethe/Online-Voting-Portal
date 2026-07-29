import Election from "../../models/election.model.js";

export const closeElection = async (req, res) => {
  try {
    const { id } = req.params;

    const election = await Election.findById(id);

    if (!election) {
      return res.status(404).json({
        success: false,
        message: "Election not found",
      });
    }

    if (election.status === "closed") {
      return res.status(400).json({
        success: false,
        message: "Election is already closed",
      });
    }

    election.status = "closed";
    await election.save();

    return res.status(200).json({
      success: true,
      message: "Election closed successfully",
      data: election,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};