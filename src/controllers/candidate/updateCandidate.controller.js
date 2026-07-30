import { updateCandidateService } from "../../modules/candidate/candidateService.module.js";

export const updateCandidate = async (req, res) => {
  try {
    const candidate = await updateCandidateService(
      req.params.id,
      req.body
    );

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate ticket not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Candidate ticket updated successfully.",
      data: candidate,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};