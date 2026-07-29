import Election from "../../models/election.model.js";

export const getAllElections = async (req, res) => {
  try {
    const elections = await Election.find();

    return res.status(200).json({
      success: true,
      totalElections: elections.length,
      data: elections,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};