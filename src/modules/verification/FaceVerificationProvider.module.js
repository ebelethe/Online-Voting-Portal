export const verifyFaceAndLiveness = async ({
  faceImage,
  livenessToken,
}) => {
  if (!faceImage) {
    return {
      verified: false,
      faceMatch: false,
      livenessPassed: false,
      message: "Face image is required",
    };
  }

  if (!livenessToken) {
    return {
      verified: false,
      faceMatch: false,
      livenessPassed: false,
      message: "Liveness verification is required",
    };
  }

  // Mock liveness verification
  const livenessPassed = livenessToken === "TEST-LIVE-VERIFIED";

  if (!livenessPassed) {
    return {
      verified: false,
      faceMatch: false,
      livenessPassed: false,
      message: "Liveness verification failed",
    };
  }

  // Mock face matching
  const faceMatchPassed = true;

  if (!faceMatchPassed) {
    return {
      verified: false,
      faceMatch: false,
      livenessPassed: true,
      message: "Face verification failed",
    };
  }

  return {
    verified: true,
    faceMatch: true,
    livenessPassed: true,
    message: "Face and liveness verification successful",
  };
};


export const verifyVoterFace = async ({
  faceImage,
  livenessToken,
}) => {
  const result = await verifyFaceAndLiveness({
    faceImage,
    livenessToken,
  });

  if (!result.verified) {
    return {
      verified: false,
      faceMatch: result.faceMatch,
      livenessPassed: result.livenessPassed,
      message: result.message,
    };
  }

  return {
    verified: true,
    faceMatch: result.faceMatch,
    livenessPassed: result.livenessPassed,
    message: "Voter face verification successful",
  };
};