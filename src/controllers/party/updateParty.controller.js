import Party from "../../models/party.model.js";

export const updateParty = async (req, res) => {
  try {
    const party = await Party.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!party) {
      return res.status(404).json({
        success: false,
        message: "Party not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Party updated successfully.",
      data: party,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};