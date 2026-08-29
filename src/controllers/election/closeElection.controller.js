import Election from "../../models/election.model.js";
import User from "../../models/user.model.js";
import { sendElectionNotificationEmail } from "../../modules/email/notificationEmailService.module.js";
import { createAuditLog } from "../../modules/auditLog/auditLogService.module.js";

export const closeElection = async (req, res) => {
  try {
    const { id } = req.params;

    const election = await Election.findById(id);

    if (!election) {
      return res.status(404).json({
        success: false,
        message: "Election not found",
      });
    }

    if (election.status === "closed") {
      return res.status(400).json({
        success: false,
        message: "Election is already closed",
      });
    }

    election.status = "closed";
    await election.save();

    await createAuditLog({
        userId: user._id,
        action: "Election Closed",
        resource: "Election",
        resourceId: election._id,
        description: "Election results published successfully",
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
        });



// Get all registered voters
      const voters = await User.find({ role: "voter" }); 
// Send notification email to each voter
      for (const voter of voters) {
        await sendElectionNotificationEmail({
        email: voter.email,
        fullName: voter.fullName,
        title: "Election Results Are Live",
        message: `The election for "${election.title}" has officially ended
          and the final results are now available. please Log into the online voting portal
          to view the results statistic.`,
    });
  }
           
    return res.status(200).json({
      success: true,
      message: "Election results published successfully",
      data: election,
    });
  }catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};