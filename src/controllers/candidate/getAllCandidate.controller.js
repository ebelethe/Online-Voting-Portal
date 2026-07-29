import Candidate from "../../models/candidate.model.js";

// Get All Candidates
export const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();

    return res.status(200).json({
      success: true,
      message: "Candidates fetched successfully",
      totalCandidates: candidates.length,
      data: candidates,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
