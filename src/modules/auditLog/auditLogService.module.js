 import AuditLog from "../../models/auditLog.model.js";

export const createAuditLog = async ({
  userId = null,
  action,
  resource,
  resourceId = null,
  description = "",
  metadata = {},
  ipAddress = null,
  userAgent = null,
}) => {
  const auditLog = await AuditLog.create({
    user: userId,
    action,
    resource,
    resourceId,
    description,
    metadata,
    ipAddress,
    userAgent,
  });

  return auditLog;
};

export const getAuditLogs = async (filters = {}) => {
  const auditLogs = await AuditLog.find(filters)
    //.populate("user", "fullName email role")
    .sort({ createdAt: -1 });

  return auditLogs;
};