import { requestResetPasswordService, resetPasswordService, changePasswordService } from "../../modules/auth/passwordService.module.js";

export const requestResetPassword = async (req, res, next) => {
    try {
        const { email } = req.body;

        const result = await requestResetPasswordService(email);

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }
};
export const resetPassword = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;

    const result = await resetPasswordService(token, newPassword);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const result = await changePasswordService(
      req.user.id,
      currentPassword,
      newPassword
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};