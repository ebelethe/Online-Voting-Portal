export const validateAuditLogQuery = (data = {}) => {
  const errors = {};

  if (data.action !== undefined && typeof data.action !== "string") {
    errors.action = "Action must be a string.";
  }

  if (
    data.resource !== undefined &&
    typeof data.resource !== "string"
  ) {
    errors.resource = "Resource must be a string.";
  }

  if (
    data.userId !== undefined &&
    typeof data.userId !== "string"
  ) {
    errors.userId = "User ID must be a string.";
  }

  if (
    data.page !== undefined &&
    (isNaN(data.page) || Number(data.page) < 1)
  ) {
    errors.page = "Page must be a positive number.";
  }

  if (
    data.limit !== undefined &&
    (isNaN(data.limit) || Number(data.limit) < 1)
  ) {
    errors.limit = "Limit must be a positive number.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};