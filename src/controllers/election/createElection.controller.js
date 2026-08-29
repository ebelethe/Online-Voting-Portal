import Election from "../../models/election.model.js";
import User from "../../models/user.model.js";
import { sendElectionNotificationEmail } from "../../modules/email/notificationEmailService.module.js";
import { createAuditLog } from "../../modules/auditLog/auditLogService.module.js";

export const createElection = async (req, res) => {
  try {
    const { title, description, startDate, endDate } = req.body;

    const existingElection = await Election.findOne({ title });

    if (existingElection) {
      return res.status(400).json({
        success: false,
        message: "Election already exists",
      });
    }

    const election = await Election.create({
      title,
      description,
      startDate,
      endDate,
    });
    
// Get all registered voters
const voters = await User.find({ role: "voter" });

// Send notification email to each voter
for (const voter of voters) {
    await sendElectionNotificationEmail({
        email: voter.email,
        fullName: voter.fullName,
        title: "Election Created",
        message: `A new election "${election.title}" has been created. Stay tuned for the voting schedule.`,
    });
  }
        await createAuditLog({
        userId: user._id,
        action: "Election Created",
        resource: "Election",
        resourceId: election._id,
        description: "Election created successfully",
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
        });

    return res.status(201).json({
      success: true,
      message: "Election created successfully",
      data: election,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

