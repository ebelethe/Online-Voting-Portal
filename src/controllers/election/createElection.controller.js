import Election from "../../models/election.model.js";

export const createElection = async (req, res) => {
  try {
    const { title, description, startDate, endDate } = req.body;

    const existingElection = await Election.findOne({ title });

    if (existingElection) {
      return res.status(400).json({
        success: false,
        message: "Election already exists",
      });
    }

    const election = await Election.create({
      title,
      description,
      startDate,
      endDate,
    });

    return res.status(201).json({
      success: true,
      message: "Election created successfully",
      data: election,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};