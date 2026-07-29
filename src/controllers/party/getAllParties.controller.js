import Party from "../../models/party.model.js";

export const getAllParties = async (req, res) => {
  try {
    const parties = await Party.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: parties.length,
      data: parties,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};