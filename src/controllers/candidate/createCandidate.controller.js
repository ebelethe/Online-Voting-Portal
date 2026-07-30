import { validateCandidate } from "../../modules/candidate/candidateValidator.module.js";
import { createCandidateService } from "../../modules/candidate/candidateService.module.js";

export const createCandidate = async (req, res) => {
  try {
    const validation = validateCandidate(req.body);

    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        message: validation.message,
      });
    }

    const candidate = await createCandidateService(req.body);

    return res.status(201).json({
      success: true,
      message: "Candidate ticket created successfully.",
      data: candidate,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};