import { getCandidateByIdService } from "../../modules/candidate/candidateService.module.js";

export const getCandidateById = async (req, res) => {
  try {
    const candidate = await getCandidateByIdService(req.params.id);

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate ticket not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: candidate,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};