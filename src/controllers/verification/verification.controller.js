import {
 verifyVoterIdentity,
  completeVoterVerification,
} from "../../modules/verification/verificationService.module.js";

export const verifyVoterId = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await verifyVoterIdentity(userId, req.body);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Voter ID verification error:", error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Voter ID verification failed",
      ...(error.errors && { errors: error.errors }),
    });
  }
};

export const submitVoterFaceVerification = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await completeVoterVerification(userId, req.body);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Face verification error:", error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Face verification failed",
    });
  }
};