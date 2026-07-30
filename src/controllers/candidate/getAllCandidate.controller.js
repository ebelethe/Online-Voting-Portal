import { getAllCandidatesService } from "../../modules/candidate/candidateService.module.js";

export const getAllCandidate = async (req, res) => {
  try {
    const candidates = await getAllCandidatesService();

    return res.status(200).json({
      success: true,
      count: candidates.length,
      data: candidates,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};