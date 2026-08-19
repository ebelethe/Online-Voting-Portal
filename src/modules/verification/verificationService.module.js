import User from "../../models/user.model.js";
import { validateVoterVerification } from "./verificationValidator.module.js";
import { verifyVoterWithRegistry } from "./VoterRegistryProvider.module.js";
import { verifyVoterFace } from "./FaceVerificationProvider.module.js";

export const verifyVoterIdentity = async (userId, data) => {

  const user = await User.findById(userId);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  // User has already completed the entire verification process.
  if (user.voterVerificationStatus === "verified") {
    return {
      success: true,
      message: "Voter verification has already been completed",
      verification: {
        voterCardId: user.voterCardId,
        status: "verified",
        verifiedAt: user.voterVerificationDate,
      },
    };
  }

  const validation = validateVoterVerification(data);
  if (!validation.isValid) {
    const error = new Error("Invalid verification details");
    error.statusCode = 400;
    error.errors = validation.errors;
    throw error;
  }

  const { voterCardId, fullName, dateOfBirth } = data;

  // Check whether the Voter Card ID is already linked
  // to another user account.
  const existingUser = await User.findOne({
    voterCardId,
    _id: { $ne: userId },
  });

  if (existingUser) {
    const error = new Error(
      "This Voter Card ID is already linked to another account"
    );

    error.statusCode = 409;
    throw error;
  }

  // Verify the supplied details against the
  // mock voter registry.
  const registryResult = await verifyVoterWithRegistry({
    voterCardId,
    fullName,
    dateOfBirth,
  });

  if (!registryResult.verified) {
    const error = new Error(registryResult.message);
    error.statusCode = 401;
    throw error;
  }

  // Save the Voter Card ID only after successful
  // registry verification.
  user.voterCardId = voterCardId;
  user.voterVerificationStatus = "pending";

  await user.save();

  return {
    success: true,
    message: "Identity verified. Proceed to face verification.",
    verification: {
      voterCardId,
      status: "pending",
      nextStep: "face-verification",
    },
  };
};


export const completeVoterVerification = async (userId, data) => {

  
  const user = await User.findById(userId);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }
  // User has already completed verification.
  if (user.voterVerificationStatus === "verified") {
    const error = new Error(
      "Voter verification has already been completed"
    );
    error.statusCode = 409;
    throw error;
  }

  // Make sure the user has already passed
  // the Voter Card ID verification stage.
  if (user.voterVerificationStatus !== "pending") {
    const error = new Error(
      "Voter identity verification must be completed before face verification"
    );

    error.statusCode = 400;
    throw error;
  }


  const { faceImage, livenessToken } = data;

  const faceResult = await verifyVoterFace({
    faceImage,
    livenessToken,
  });

  if (!faceResult.verified) {
    const error = new Error(faceResult.message);
    error.statusCode = 401;
    throw error;
  }

  // Both Voter ID verification and face/liveness
  // verification have now passed.
  user.voterVerificationStatus = "verified";
  user.voterVerificationDate = new Date();

  await user.save();

  return {
    success: true,
    message: "Voter verification completed successfully",
    verification: {
      voterCardId: user.voterCardId,
      status: "verified",
      faceMatch: faceResult.faceMatch,
      livenessPassed: faceResult.livenessPassed,
      verifiedAt: user.voterVerificationDate,
    },
  };
};