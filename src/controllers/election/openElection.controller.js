import Election from "../../models/election.model.js";
import User from "../../models/user.model.js";
import { sendElectionNotificationEmail } from "../../modules/email/notificationEmailService.module.js";

export const openElection = async (req, res) => {
  try {
    const { id } = req.params;

    const election = await Election.findById(id);

    if (!election) {
      return res.status(404).json({
        success: false,
        message: "Election not found",
      });
    }

    if (election.status === "active") {
      return res.status(400).json({
        success: false,
        message: "Election is already active",
      });
    }    

    if (election.status === "closed") {
      return res.status(400).json({
        success: false,
        message: "A closed election cannot be reopened",
      });
    }

    election.status = "active";
    await election.save();

            
// Get all registered voters
      const voters = await User.find({ role: "voter" });

// Send notification email to each voter
      for (const voter of voters) {
        await sendElectionNotificationEmail({
        email: voter.email,
        fullName: voter.fullName,
        title: "Voting Has Started",
        message: `Voting for "${election.title}" has started. You can now log in and cast
         cast your vote before the election closes.`,
    });
  }


    return res.status(200).json({
      success: true,
      message: "Election opened successfully",
      data: election,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};