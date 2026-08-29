import {
  getAuditLogs,
} from "../../modules/auditLog/auditLogService.module.js";

import {
  validateAuditLogQuery,
} from "../../modules/auditLog/auditLogValidator.module.js";

export const getAuditLogsController = async (req, res) => {
  try {
    const validation = validateAuditLogQuery(req.query);

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid audit log query.",
        errors: validation.errors,
      });
    }

    const filters = {};

    if (req.query.action) {
      filters.action = req.query.action;
    }

    if (req.query.resource) {
      filters.resource = req.query.resource;
    }

    if (req.query.userId) {
      filters.user = req.query.userId;
    }

    const auditLogs = await getAuditLogs(filters);

    return res.status(200).json({
      success: true,
      message: "Audit logs retrieved successfully.",
      data: auditLogs,
    });
  } catch (error) {
    console.error("Get audit logs error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve audit logs.",
    });
  }
};