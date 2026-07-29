import { validateParty } from "../../modules/party/partyValidator.module.js";
import { createPartyService } from "../../modules/party/partyService.module.js";

export const createParty = async (req, res) => {
  try {
    const validation = validateParty(req.body);

    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        message: validation.message,
      });
    }

    const party = await createPartyService(req.body);

    return res.status(201).json({
      success: true,
      message: "Party created successfully.",
      data: party,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};