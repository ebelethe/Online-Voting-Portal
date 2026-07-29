import Candidate from "../../models/candidate.model.js";

// Create Candidate
export const createCandidate = async (req, res) => {
  try {
    const { fullName, party, position, manifesto, image } = req.body;

    // Check if candidate already exists
    const existingCandidate = await Candidate.findOne({
      fullName,
      position,
    });

    if (existingCandidate) {
      return res.status(400).json({
        success: false,
        message: "Candidate already exists for this position",
      });
    }

    const candidate = await Candidate.create({
      fullName,
      party,
      position,
      manifesto,
      image,
    });

    return res.status(201).json({
      success: true,
      message: "Candidate created successfully",
      data: candidate,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
