import Party from "../../models/party.model.js";

export const deleteParty = async (req, res) => {
  try {
    const party = await Party.findByIdAndDelete(req.params.id);

    if (!party) {
      return res.status(404).json({
        success: false,
        message: "Party not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Party deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};