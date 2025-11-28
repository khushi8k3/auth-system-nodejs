import { Router } from "express";
import { registerUser, login, logoutUser, verifyEmail, refreshAccessToken, forgotPassword, resetForgotPassword, currentUser, changeCurrentPassword, resendEmailVerification } from "../controllers/auth.controller.js"
import { validate } from "../middlewares/validator.middleware.js";
import { userLoginValidator, userRegisterValidator, userForgotPasswordValidator, userReseForgotPasswordValidator, userChangeCurrentPasswordValidator } from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

// unsecured routes
router.route("/register").post(userRegisterValidator(),validate,registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/forgot-password").post(userForgotPasswordValidator(), validate, forgotPassword);
router.route("/reset-password").post(userReseForgotPasswordValidator(), validate, resetForgotPassword);

// secure routes(requires jwt)
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").post(verifyJWT, currentUser);
router.route("/change-password").post(verifyJWT, userChangeCurrentPasswordValidator(), validate, changeCurrentPassword);
router.route("/resend-email-verification").post(verifyJWT, resendEmailVerification)
export default router;