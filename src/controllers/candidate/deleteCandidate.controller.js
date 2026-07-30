import { deleteCandidateService } from "../../modules/candidate/candidateService.module.js";

export const deleteCandidate = async (req, res) => {
  try {
    const candidate = await deleteCandidateService(req.params.id);

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate ticket not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Candidate ticket deleted successfully.",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};